import Link from 'next/link';
import { useTrail, animated } from 'react-spring';

import Overlay from '../overlay';

const navItems = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/experience',
    text: 'Experience',
  },
  {
    path: '/projects',
    text: 'Projects',
  },
  {
    path: '/contact',
    text: 'Contact',
  },
];

const Menu = ({ isOpen }) => {
  const navItemsTrail = useTrail(navItems.length, {
    opacity: isOpen ? 1 : 0,
    marginLeft: isOpen ? 20 : -100,
    transform: isOpen ? 'translate3d(0,0px,0)' : 'translate3d(0,-40px,0)',
    from: { marginLeft: -100, opacity: 0, transform: 'translate3d(0,-40px,0)' },
  });

  return (
    <Overlay isVisible={isOpen}>
      <div className="flex flex-col py-24 px-16">
        {navItemsTrail.map((props, index) => (
          <animated.div
            key={navItems[index].path}
            style={{ marginBottom: 27, ...props }}
          >
            <Link href={navItems[index].path}>
              <a className="text-3xl text-black uppercase border-l border-solid border-black pl-4">
                {navItems[index].text}
              </a>
            </Link>
          </animated.div>
        ))}
      </div>
    </Overlay>
  );
};

export default Menu;
