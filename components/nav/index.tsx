import { useState } from 'react';
import Link from 'next/link';

import MenuIcon from './menu-icon';
import Menu from './menu';

const navItems = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/experience',
    name: 'Experience',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

export const Nav: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="flex h-16 bg-background-navigation max-w-screen-lg items-center mx-auto px-4 md:px-8">
      <div
        className="z-20 md:hidden"
        onClick={() => setMenuVisible(!isMenuVisible)}
      >
        <MenuIcon isOpen={isMenuVisible} />
      </div>
      <Menu isOpen={isMenuVisible} />
      {navItems.map(({ path, name }) => (
        <Link key={path} href={path}>
          <a className="hidden md:inline p-4 text-base hover:bg-background-navigation-hover rounded transition duration-300">
            {name}
          </a>
        </Link>
      ))}
    </nav>
  );
};
