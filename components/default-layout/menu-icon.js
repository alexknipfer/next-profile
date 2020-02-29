import { useSpring, config, animated } from 'react-spring';

const openedTransformationConfig = {
  top: 'translate(2, 7) rotate(0)',
  center: 'translate(2, 19) rotate(0)',
  bottom: 'translate(2, 31) rotate(0)',
};

const closedTransformationConfig = {
  top: 'translate(5, 32) rotate(-45)',
  center: 'translate(8, 7) rotate(45)',
  bottom: 'translate(5, 32) rotate(-45)',
};

const MenuIcon = ({ isOpen }) => {
  const props = useSpring({
    to: isOpen ? closedTransformationConfig : openedTransformationConfig,
    config: config.stiff,
  });

  return (
    <svg
      width="44"
      height="44"
      fill="#443A3A"
      xmlns="http://www.w3.org/2000/svg"
    >
      <animated.rect width="35" height="3" rx="3" transform={props.top} />
      <animated.rect width="35" height="3" rx="3" transform={props.center} />
      <animated.rect width="35" height="3" rx="3" transform={props.bottom} />
    </svg>
  );
};

export default MenuIcon;
