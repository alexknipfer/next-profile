import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Menu from './menu';
import MenuIcon from './menu-icon';

const DefaultLayout = ({ children }) => {
  const { pathname } = useRouter();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const linkClasses = [
    'hidden',
    'hover:text-white',
    'hover:bg-primaryGray',
    'link',
    'md:flex',
    'text-4xl',
    'px-4',
    'uppercase',
    'no-underline',
    'h-55',
    'items-center',
  ];

  return (
    <div className="h-full relative">
      <Link href="/">
        <a
          className={`home-link ${linkClasses.join(' ')} ${pathname === '/' &&
            'bg-primaryGray text-white'}`}
        >
          Home
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`project-link ${linkClasses.join(' ')} ${pathname ===
            '/projects' && 'bg-primaryGray text-white'}`}
        >
          Projects
        </a>
      </Link>
      <Link href="/experience">
        <a
          className={`experience-link ${linkClasses.join(' ')} ${pathname ===
            '/experience' && 'bg-primaryGray text-white'}`}
        >
          Experience
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={`contact-link ${linkClasses.join(' ')} ${pathname ===
            '/contact' && 'bg-primaryGray text-white'}`}
        >
          Contact
        </a>
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
