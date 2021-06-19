import { SpotifyNowPlayingResponse } from '@/interfaces/Spotify';
import { NowPlayingResponse } from 'pages/api/now-playing';

export function serialize(
  spotifyNowPlayingResponse: SpotifyNowPlayingResponse,
): NowPlayingResponse {
  const isPlaying = spotifyNowPlayingResponse.is_playing;
  const songName = spotifyNowPlayingResponse.item.name;
  const artists = spotifyNowPlayingResponse.item.artists
    .map((artist) => artist.name)
    .join(', ');
  const album = spotifyNowPlayingResponse.item.album.name;
  const albumImage = spotifyNowPlayingResponse.item.album.images[0].url;
  const songUrl = spotifyNowPlayingResponse.item.external_urls.spotify;

  return {
    isPlaying,
    songName,
    artists,
    album,
    albumImage,
    songUrl,
  };
}
