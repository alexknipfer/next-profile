import { Fragment } from 'react';

interface Props {
  isVisible: boolean;
}

const Overlay: React.FC<Props> = ({ children, isVisible }) => {
  return (
    <Fragment>
      {isVisible && (
        <div
          className="absolute w-full h-full top-0 left-0 z-10 bg-background-overlay"
        >
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default Overlay;
