import { render, screen } from '@/test-utils';
import NowPlaying from '@/components/NowPlaying';
import { ImageProps } from 'next/image';
import { rest, server } from '@/test/server';
import { NowPlayingResponseFactory } from '@/test/factories/NowPlayingResponseFactory';
import { NowPlayingResponse } from 'pages/api/now-playing';

/**
 * Current workaround for next/image until finding a better way for handling
 * hostnames in next.config.js
 *
 * https://github.com/vercel/next.js/issues/21549
 */
jest.mock('next/image', () => (props: ImageProps) => <img {...props} />);

describe('successful response from now playing', () => {
  let nowPlayingResponse: NowPlayingResponse;

  beforeEach(() => {
    nowPlayingResponse = NowPlayingResponseFactory.build({
      isPlaying: true,
    });

    server.use(
      rest.get('/api/now-playing', (req, res, ctx) =>
        res(ctx.json(nowPlayingResponse)),
      ),
    );
  });

  test('displaying name of song link', async () => {
    render(<NowPlaying />);

    const songAnchorElement = await screen.findByRole('link', {
      name: nowPlayingResponse.songName,
    });

    expect(songAnchorElement).toHaveTextContent(nowPlayingResponse.songName);
    expect(songAnchorElement).toHaveAttribute(
      'href',
      nowPlayingResponse.songUrl,
    );
  });

  test('song link should open in new tab', async () => {
    render(<NowPlaying />);

    const songAnchorElement = await screen.findByRole('link', {
      name: nowPlayingResponse.songName,
    });

    expect(songAnchorElement).toHaveAttribute('target', '_blank');
    expect(songAnchorElement).toHaveAttribute('rel', 'noreferrer');
  });

  test('displays artist(s) name', async () => {
    render(<NowPlaying />);

    const artistElement = await screen.findByText(nowPlayingResponse.artists);

    expect(artistElement).toBeInTheDocument();
  });
});

describe('song is not currently playing', () => {
  let nowPlayingResponse: NowPlayingResponse;

  beforeEach(() => {
    nowPlayingResponse = NowPlayingResponseFactory.build({
      isPlaying: false,
    });

    server.use(
      rest.get('/api/now-playing', (req, res, ctx) =>
        res(ctx.json(nowPlayingResponse)),
      ),
    );
  });

  test('displays default spotify logo', async () => {
    render(<NowPlaying />);

    const spotifyLogoElement = await screen.findByAltText('Spotify music logo');

    expect(spotifyLogoElement).toHaveAttribute(
      'src',
      '/static/images/spotify.png',
    );
  });

  test('displays `Not currently playing`', async () => {
    render(<NowPlaying />);

    const notPlayingElement = await screen.findByText('Not currently playing');

    expect(notPlayingElement).toBeInTheDocument();
  });
});
