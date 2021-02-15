import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

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

  return (
    <nav className="sticky top-0 z-20 flex h-16 max-w-screen-md items-center mx-auto px-4 md:px-8 my-8 bg-white dark:bg-black">
      <div
        className="z-20 md:hidden"
        onClick={() => setMenuVisible(!isMenuVisible)}
      >
        <MenuIcon isOpen={isMenuVisible} />
      </div>
      <Menu isOpen={isMenuVisible} />
      {navItems.map(({ path, name }) => (
        <Link key={path} href={path}>
          <a className="hidden md:inline p-4 text-base hover:bg-gray-100 rounded transition duration-300">
            {name}
          </a>
        </Link>
      ))}
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle theme
      </button>
    </nav>
  );
};

export default Nav;
