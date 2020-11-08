import NextImage from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';

interface Props {
  name: string;
  link: string;
  img: string;
}

const ProjectCard: React.FC<Props> = ({ name, link, img }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  return (
    <div
      className="relative rounded-md shadow-xl"
      onMouseEnter={() => setOverlayVisible(true)}
      onMouseLeave={() => setOverlayVisible(false)}
    >
      <div
        className={classNames(
          'absolute top-0 left-0 w-full h-full flex flex-col justify-items-end bg-project-card-shadow transition-opacity duration-200 rounded-md',
          {
            'opacity-0': !isOverlayVisible,
            'opacity-100': isOverlayVisible,
          },
        )}
      >
        <div className="bg-project-card-details mt-auto rounded-b-md flex items-center flex-col py-3 px-4">
          <div className="font-thin text-copy-project-card">{name}</div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-copy-link"
          >
            {link}
          </a>
        </div>
      </div>
      <NextImage
        src={img}
        alt={`${name} Project`}
        unsized
        className="rounded-md"
      />
    </div>
  );
};

export default ProjectCard;
