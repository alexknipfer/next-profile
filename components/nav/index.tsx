import { useState } from 'react';
import Link from 'next/link';
import ThemeSwitchButton from '@/components/theme-switch-button';

import MenuIcon from './menu-icon';
import Menu from './menu';

export const navItems = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/timeline',
    name: 'Timeline',
  },
  {
    path: '/experience',
    name: 'Experience',
  },
];

const Nav: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="sticky top-0 z-20 max-w-screen-md mb-2 mx-auto px-6 py-2 md:p-6 bg-white dark:bg-gray-900 bg-opacity-60 nav-backdrop">
      <Menu isOpen={isMenuVisible} />
      <div className="flex justify-between items-center w-full h-16">
        <button
          aria-label="Open navigation menu"
          className="relative z-40 md:hidden text-gray-900 dark:text-gray-200"
          onClick={() => setMenuVisible(!isMenuVisible)}
        >
          <MenuIcon isOpen={isMenuVisible} />
        </button>
        <div className="sm:hidden md:block">
          {navItems.map(({ path, name }) => (
            <Link key={path} href={path}>
              <a className="hidden md:inline p-4 text-base text-gray-700 dark:text-white">
                {name}
              </a>
            </Link>
          ))}
        </div>
        <ThemeSwitchButton />
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
