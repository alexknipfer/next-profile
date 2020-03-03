import { useTrail, animated, SpringConfig, useSpring } from 'react-spring';

const welcomeTextItems = ['Welcome', 'to', 'the', 'portfolio', 'of'];
const config = {
  mass: 5,
  tension: 2000,
  friction: 200,
};

const aboutMeTextItems = [
  {
    text: 'Alex',
    type: 'firstName',
  },
  {
    text: 'Knipfer',
    type: 'lastName',
  },
  {
    text: 'Full',
    type: 'jobTitle',
  },
  {
    text: 'Stack',
    type: 'jobTitle',
  },
  {
    text: 'Developer',
    type: 'jobTitle',
  },
  {
    text: 'From',
    type: 'location',
  },
  {
    text: 'Cincinnati.',
    type: 'location',
  },
];

const Welcome = () => {
  const imageProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  const welcomeTextTrail = useTrail(welcomeTextItems.length, {
    config,
    opacity: 1,
    x: 0,
    height: 40,
    from: { opacity: 0, x: 40, height: 0 },
  });

  const aboutMeTextTrail = useTrail(aboutMeTextItems.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 40 },
  });

  return (
    <div className="h-full flex justify-center items-center flex-col md:flex-row">
      <div className="hidden md:block">
        {welcomeTextTrail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            className="text-right pr-8 text-xl leading-8 text-black uppercase"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`),
            }}
          >
            <animated.div style={{ height }}>
              {welcomeTextItems[index]}
            </animated.div>
          </animated.div>
        ))}
      </div>
      <div className="w-64 md:w-2/6">
        <animated.img
          src="/static/images/profile_pic.png"
          alt="profile pic"
          style={imageProps}
        />
      </div>
      <div className="mt-6 md:pl-8 md:mb-0">
        {aboutMeTextTrail.map(({ x, ...rest }, index) => {
          const currentItem = aboutMeTextItems[index];

          return (
            <animated.div
              key={index}
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`),
              }}
            >
              {currentItem.type === 'firstName' && (
                <div className="uppercase text-black text-xl">
                  {currentItem.text}
                </div>
              )}
              {currentItem.type === 'lastName' && (
                <div className="uppercase text-white text-xl bg-primaryGray px-3 mb-3">
                  {currentItem.text}
                </div>
              )}
              {currentItem.type === 'jobTitle' && (
                <div className="font-bold text-black text-base">
                  {currentItem.text}
                </div>
              )}
              {currentItem.type === 'location' && (
                <div className="text-black text-xl">{currentItem.text}</div>
              )}
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default Welcome;
