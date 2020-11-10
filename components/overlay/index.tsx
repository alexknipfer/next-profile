interface Props {
  isVisible: boolean;
}

const Overlay: React.FC<Props> = ({ children, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed w-full h-full top-0 left-0 z-10 bg-overlay">
      {children}
    </div>
  );
};

export default Overlay;
