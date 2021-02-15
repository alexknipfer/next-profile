import { NextApiResponse, NextApiRequest } from 'next';
import { SpotifyNowPlayingResponse } from '@/interfaces/Spotify';
import { getNowPlayingTrack } from '@/lib/spotify';

export interface NowPlayingResponse {
  isPlaying: boolean;
  songName: string;
  artists: string;
  album: string;
  albumImage: string;
  songUrl: string;
}

export default async (
  _: NextApiRequest,
  res: NextApiResponse<NowPlayingResponse>,
) => {
  const response = await getNowPlayingTrack();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({
      isPlaying: false,
      songName: '',
      artists: '',
      album: '',
      albumImage: '',
      songUrl: '',
    });
  }

  const songDetails: SpotifyNowPlayingResponse = await response.json();

  const isPlaying = songDetails.is_playing;
  const songName = songDetails.item.name;
  const artists = songDetails.item.artists
    .map((artist) => artist.name)
    .join(', ');
  const album = songDetails.item.album.name;
  const albumImage = songDetails.item.album.images[0].url;
  const songUrl = songDetails.item.external_urls.spotify;

  return res.status(200).json({
    isPlaying,
    songName,
    artists,
    album,
    albumImage,
    songUrl,
  });
};
