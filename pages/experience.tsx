import { useTrail, animated } from 'react-spring';
import DefaultLayout from '@/components/default-layout';
import Careers from '@/components/experience/careers';
import Education from '@/components/experience/education';
import Technologies from '@/components/experience/technologies';
import Meta from '@/components/meta';

const config = {
  mass: 5,
  tension: 2000,
  friction: 200,
};

const experienceComponents = [
  <Careers key="careers" />,
  <Education key="education" />,
  <Technologies key="technologies" />,
];

const Experience = () => {
  const componentTrail = useTrail(experienceComponents.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 40 },
  });

  return (
    <DefaultLayout>
      <Meta
        title="Experience | Alex Knipfer"
        description="Alex Knipfer's technical experience"
        url="https://alexknipfer.com/experience"
      />
      <div className="flex justify-center items-center h-full px-8 md:p-20">
        <div className="grid grid-cols-1 col-auto">
          {componentTrail.map(({ x, ...rest }, index) => (
            <animated.div
              key={index}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0, ${x}px, 0)`),
              }}
            >
              {experienceComponents[index]}
            </animated.div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Experience;
