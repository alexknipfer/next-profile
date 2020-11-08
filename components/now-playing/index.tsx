import useSWR from 'swr';

import { NowPlayingResponse } from '../../pages/api/now-playing';

const NowPlaying: React.FC = () => {
  const { data } = useSWR<NowPlayingResponse>('/api/now-playing');

  if (!data || !data.isPlaying) {
    return null;
  }

  return (
    <div className="relative border border-card-border rounded-md flex items-center w-64 p-3 shadow">
      <img
        src={data.albumImage}
        className="rounded block w-1/4"
        alt="Spotify album cover"
      />
      <img
        src="/static/images/spotify_icon.svg"
        width={15}
        height={15}
        style={{ position: 'absolute', top: 8, right: 8 }}
      />
      <div className="w-3/4 pl-3">
        <a
          href={data.songUrl}
          target="_blank"
          rel="noreferrer"
          className="font-bold truncate block hover:underline text-sm"
        >
          {data.songName}
        </a>
        <div className="truncate">{data.artists}</div>
      </div>
    </div>
  );
};

export default NowPlaying;
