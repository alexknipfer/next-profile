interface Props {
  isVisible: boolean;
}

const Overlay: React.FC<Props> = ({ children, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 z-30">
      {children}
    </div>
  );
};

export default Overlay;
