import { useState } from 'react';
import Link from 'next/link';

import Menu from './menu';
import MenuIcon from './menu-icon';

const linkClasses = [
  'hidden',
  'hover:text-white',
  'hover:bg-primaryGray',
  'link',
  'cursor-pointer',
  'md:flex',
  'text-4xl',
  'px-4',
  'uppercase',
  'no-underline',
  'h-55',
  'items-center',
];

const DefaultLayout = ({ children }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <div className="h-full relative">
      <Link href="/">
        <a className={`home-link ${linkClasses.join(' ')}`}>Home</a>
      </Link>
      <Link href="/projects">
        <a className={`project-link ${linkClasses.join(' ')}`}>Projects</a>
      </Link>
      <Link href="/experience">
        <a className={`experience-link ${linkClasses.join(' ')}`}>Experience</a>
      </Link>
      <Link href="/contact">
        <a className={`contact-link ${linkClasses.join(' ')}`}>Contact</a>
      </Link>
      <div
        className="z-20 absolute t-0 l-0 mt-4 ml-4 md:hidden"
        onClick={() => setMenuVisible(!isMenuVisible)}
      >
        <MenuIcon isOpen={isMenuVisible} />
      </div>
      <Menu isOpen={isMenuVisible} />
      <div className="h-full p-20">{children}</div>
      <style jsx>{`
        .link {
          border: 1px solid #443a3a;
          letter-spacing: 0.2em;
        }

        .home-link {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .project-link {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .experience-link {
          position: absolute;
          left: -96px;
          top: 40%;
          transform: rotate(90deg);
        }

        .contact-link {
          position: absolute;
          right: -64px;
          top: 40%;
          transform: rotate(270deg);
        }
      `}</style>
      <style jsx global>
        {`
          html,
          body,
          body > div:first-child,
          div#__next {
            height: 100%;
            width: 100%;
            font-family: 'Ubuntu';
            font-weight: 400;
          }
          *,
          *:after,
          *:before {
            box-sizing: border-box;
          }
          body {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

export default DefaultLayout;
