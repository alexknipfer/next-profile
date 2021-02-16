import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import MoonIcon from '../../public/static/icons/moon.svg';
import SunIcon from '../../public/static/icons/sun.svg';

import MenuIcon from './menu-icon';
import Menu from './menu';

const navItems = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/timeline',
    name: 'Timeline',
  },
];

const Nav: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === 'dark';
  const DarkModeSwitchIcon = isDarkTheme ? SunIcon : MoonIcon;

  return (
    <nav className="nav-backdrop sticky top-0 z-20 max-w-screen-md mx-auto px-4 md:px-8 my-8 bg-white dark:bg-gray-900 bg-opacity-80">
      <div
        className="z-20 md:hidden"
        onClick={() => setMenuVisible(!isMenuVisible)}
      >
        <MenuIcon isOpen={isMenuVisible} />
      </div>
      <Menu isOpen={isMenuVisible} />
      <div className="flex justify-between items-center w-full h-16">
        <div>
          {navItems.map(({ path, name }) => (
            <Link key={path} href={path}>
              <a className="hidden md:inline p-4 text-base text-gray-700 dark:text-white">
                {name}
              </a>
            </Link>
          ))}
        </div>
        <button
          onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
          className="p-2 dark:text-gray-200 text-gray-700 bg-gray-200 dark:bg-gray-700 rounded-md"
        >
          <DarkModeSwitchIcon className="fill-current" />
        </button>
      </div>
      <style jsx>{`
        .nav-backdrop {
          backdrop-filter: saturate(180%) blur(20px);
        }
      `}</style>
    </nav>
  );
};

export default Nav;
