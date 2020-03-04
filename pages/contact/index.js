import { useTrail, animated } from 'react-spring';

import DefaultLayout from '../../components/default-layout';

const contactMethods = [
  {
    img: '/static/images/contact/gmail_logo.svg',
    alt: 'gmail contact',
    href: 'mailto:alexanderknipfer@gmail.com',
    text: 'alexanderknipfer@gmail.com',
  },
  {
    img: '/static/images/contact/linkedin_logo.svg',
    alt: 'linkedin contact',
    href: 'https://www.linkedin.com/in/alex-knipfer-4381a6115/',
    text: 'linkedin.com/alexknipfer',
  },
  {
    img: '/static/images/contact/github_logo.svg',
    alt: 'github contact',
    href: 'https://github.com/alexknipfer',
    text: 'github.com/alexknipfer',
  },
  {
    img: '/static/images/contact/twitter_logo.svg',
    alt: 'twitter contact',
    href: 'https://twitter.com/knipferalex',
    text: 'twitter.com/knipferalex',
  },
];

const config = {
  mass: 5,
  tension: 2000,
  friction: 200,
};

const Contact = () => {
  const trail = useTrail(contactMethods.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 40 },
  });

  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-1 col-auto">
          {trail.map(({ x, ...rest }, index) => (
            <div className="transform hover:scale-110 transition duration-500 ease-in-out">
              <animated.a
                key={index}
                className="flex items-center mb-6"
                href={contactMethods[index].href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...rest,
                  transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`),
                }}
              >
                <img
                  src={contactMethods[index].img}
                  alt={contactMethods[index].alt}
                  className="mr-4 w-16"
                />
                <span>{contactMethods[index].text}</span>
              </animated.a>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contact;
