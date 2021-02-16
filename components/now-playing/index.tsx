import Image from 'next/image';
import useSWR from 'swr';

import { NowPlayingResponse } from '../../pages/api/now-playing';

const NowPlaying: React.FC = () => {
  const { data } = useSWR<NowPlayingResponse>('/api/now-playing');

  const isPlaying = data && data.isPlaying;

  return (
    <div className="relative border border-card-border rounded-md flex items-center w-64 p-3 shadow">
      {isPlaying ? (
        <Image
          src={data.albumImage}
          width={57}
          height={57}
          className="rounded block"
          alt={`Spotify album cover for ${data.artists}`}
        />
      ) : (
        <Image
          src="/static/images/spotify.png"
          width={30}
          height={30}
          alt="Spotify music logo"
        />
      )}
      {isPlaying && (
        <img
          src="/static/images/spotify.png"
          width={15}
          height={15}
          className="absolute top-2 right-2"
        />
      )}
      <div className="w-3/4 pl-4">
        {isPlaying ? (
          <a
            href={data.songUrl}
            target="_blank"
            rel="noreferrer"
            className="font-bold truncate block hover:underline text-sm"
          >
            {data.songName}
          </a>
        ) : (
          'Spotify'
        )}
        <div className="truncate">
          {isPlaying ? data.artists : 'Not currently playing'}
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
