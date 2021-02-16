import { useState } from 'react';
import Link from 'next/link';
import ThemeSwitchButton from '@/components/theme-switch-button';

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

  return (
    <nav className="nav-backdrop sticky top-0 z-20 max-w-screen-md mx-auto px-4 md:px-8 my-8 bg-white dark:bg-gray-900 bg-opacity-60">
      <Menu isOpen={isMenuVisible} />
      <div
        className="z-30 md:hidden absolute"
        onClick={() => setMenuVisible(!isMenuVisible)}
      >
        <MenuIcon isOpen={isMenuVisible} />
      </div>
      <div className="flex justify-between items-center w-full h-16">
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
