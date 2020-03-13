import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Menu from './menu';
import MenuIcon from './menu-icon';
import GlobalStyle from '../global-style';

const DefaultLayout = ({ children }) => {
  const { pathname } = useRouter();
  const [isMenuVisible, setMenuVisible] = useState(false);

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
      <Link href="/">
        <a
          className={`home-link ${linkClasses.join(' ')} ${pathname === '/' &&
            'bg-background-text text-white'}`}
        >
          Home
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`project-link ${linkClasses.join(' ')} ${pathname ===
            '/projects' && 'bg-background-text text-white'}`}
        >
          Projects
        </a>
      </Link>
      <Link href="/experience">
        <a
          className={`experience-link ${linkClasses.join(' ')} ${pathname ===
            '/experience' && 'bg-background-text text-white'}`}
        >
          Experience
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={`contact-link ${linkClasses.join(' ')} ${pathname ===
            '/contact' && 'bg-background-text text-white'}`}
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
      <div className="h-full pt-20 md:pt-0">{children}</div>
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
      <GlobalStyle />
    </div>
  );
};

export default DefaultLayout;
