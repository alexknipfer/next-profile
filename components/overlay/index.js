import { Fragment } from 'react';
import { useSpring } from 'react-spring';

const Overlay = ({ children, isVisible }) => {
  const animationStyle = useSpring({ opacity: isVisible ? 1 : 0 });

  return (
    <Fragment>
      {isVisible && (
        <div
          className="absolute w-full h-full top-0 left-0 z-10 bg-overlayGray"
          style={animationStyle}
        >
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default Overlay;
