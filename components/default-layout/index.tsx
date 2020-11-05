import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import GlobalStyle from '../global-style';
import { initGA, logPageView } from '../../lib/analytics';
import NowPlaying from '../now-playing';

import MenuIcon from './menu-icon';
import Menu from './menu';

const DefaultLayout: React.FC = ({ children }) => {
  const { pathname } = useRouter();
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true;
    }

    logPageView();
  }, []);

  const linkClasses = [
    'hidden',
    'hover:text-white',
    'hover:bg-background-text',
    'link',
    'md:flex',
    'text-2xl',
    'px-4',
    'uppercase',
    'no-underline',
    'h-55',
    'items-center',
  ];

  return (
    <div className="h-full relative theme-light bg-background-primary">
      <div className="now-playing hidden md:block">
        <NowPlaying />
      </div>
      <Link href="/">
        <a
          className={`home-link ${linkClasses.join(' ')} ${
            pathname === '/' && 'bg-background-text text-white'
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`project-link ${linkClasses.join(' ')} ${
            pathname === '/projects' && 'bg-background-text text-white'
          }`}
        >
          Projects
        </a>
      </Link>
      <Link href="/experience">
        <a
          className={`experience-link ${linkClasses.join(' ')} ${
            pathname === '/experience' && 'bg-background-text text-white'
          }`}
        >
          Experience
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={`contact-link ${linkClasses.join(' ')} ${
            pathname === '/contact' && 'bg-background-text text-white'
          }`}
        >
          Contact
        </a>
      </Link>
      <div
        className="z-20 fixed t-0 l-0 mt-4 ml-4 md:hidden"
        onClick={() => setMenuVisible(!isMenuVisible)}
      >
        <MenuIcon isOpen={isMenuVisible} />
      </div>
      <Menu isOpen={isMenuVisible} />
      <div className="h-full">{children}</div>
      <style jsx>{`
        .link {
          border: 1px solid #443a3a;
          letter-spacing: 0.2em;
        }

        .now-playing {
          position: absolute;
          top: 15px;
          right: 15px;
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
      <GlobalStyle />
    </div>
  );
};

export default DefaultLayout;
