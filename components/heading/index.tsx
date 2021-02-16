import classNames from 'classnames';

interface Props {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC<Props> = ({ level, children }) => {
  const Tag = level;

  return (
    <Tag
      className={classNames('font-bold mb-2 text-black dark:text-white', {
        'text-4xl md:text-5xl': level === 'h1',
        'text-3xl md:text-4xl': level === 'h2',
      })}
    >
      {children}
    </Tag>
  );
};

export default Heading;
