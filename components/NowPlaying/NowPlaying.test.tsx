import { render, screen } from '@/test-utils';
import NowPlaying from '@/components/NowPlaying';
import { ImageProps } from 'next/image';
import { rest, server } from '@/test/server';
import { NowPlayingResponseFactory } from '@/test/factories/NowPlayingResponseFactory';

/**
 * Current workaround for next/image until finding a better way for handling
 * hostnames in next.config.js
 *
 * https://github.com/vercel/next.js/issues/21549
 */
jest.mock('next/image', () => (props: ImageProps) => <img {...props} />);

test('should render now playing', async () => {
  const nowPlayingResponse = NowPlayingResponseFactory.build({
    isPlaying: true,
  });

  server.use(
    rest.get('/api/now-playing', (req, res, ctx) =>
      res(ctx.json(nowPlayingResponse)),
    ),
  );

  render(<NowPlaying />);

  const songNameElement = await screen.findByText(nowPlayingResponse.songName);

  expect(songNameElement).toBeInTheDocument();
});
