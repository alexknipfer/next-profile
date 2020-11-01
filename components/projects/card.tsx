import { useSpring, animated } from 'react-spring';

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface Props {
  name: string;
  link: string;
  img: string;
}

const Card: React.FC<Props> = ({ name, link, img }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div>
      <a
        href={link}
        className="text-blue-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.div
          className="w-full md:w-56 h-32 bg-center bg-cover border-white border-solid border-4 shadow-2xl rounded transition transition-shadow duation-500"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: props.xys.interpolate(trans as any),
            backgroundImage: `url(${img})`,
            backgroundSize: '100% 100%',
          }}
        />
      </a>
      <div className="text-tiny mt-2">
        {name} -&nbsp;
        <a
          href={link}
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      </div>
    </div>
  );
};

export default Card;
