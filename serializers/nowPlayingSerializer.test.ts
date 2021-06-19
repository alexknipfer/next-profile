import { SpotifyNowPlayingFactory } from '@/test/factories/SpotifyAPIFactories';
import { serialize } from '@/serializers/nowPlayingSerializer';
import { NowPlayingResponse } from 'pages/api/now-playing';

test('should serialize spotify now playing response', () => {
  const spotifyReponse = SpotifyNowPlayingFactory.build();

  const serializedResponse = serialize(spotifyReponse);

  const expected: NowPlayingResponse = {
    isPlaying: spotifyReponse.is_playing,
    songName: spotifyReponse.item.name,
    artists: spotifyReponse.item.artists
      .map((artist) => artist.name)
      .join(', '),
    album: spotifyReponse.item.album.name,
    albumImage: spotifyReponse.item.album.images[0].url,
    songUrl: spotifyReponse.item.external_urls.spotify,
  };

  expect(serializedResponse).toEqual(expected);
});
