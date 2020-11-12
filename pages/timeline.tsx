import { Fragment } from 'react';

import DefaultLayout from '../components/default-layout';
import Meta from '../components/meta';
import Heading from '../components/heading';
import TimelineStep from '../components/timeline-step';

interface TimelineList {
  year: number;
  timelineItems: TimelineItem[];
}

interface TimelineItem {
  name: string;
  description: string;
}

const timelineListItems: TimelineList[] = [
  {
    year: 2017,
    timelineItems: [
      {
        name: 'Graduated College',
        description:
          'I graduated from Lindenwood University with a degree in computer science. This was a major accomplishment, I worked hard for this degree and did very well in school!',
      },
      {
        name: 'Started at Hoperator',
        description:
          'Began my first full time position as a Full Stack Developer at a small startup. I wore many hats and worked heavily with React, NodeJS, and Socket IO building a real time chat platform!',
      },
    ],
  },
  {
    year: 2015,
    timelineItems: [
      {
        name: 'Started part time tutoring for Chegg.com',
        description:
          'I was an online math and computer science tutor and had the opportunity to teach students around the world in a virtual environment.',
      },
    ],
  },
  {
    year: 2014,
    timelineItems: [
      {
        name: 'Worked at Cedar Point for the summer 🎢',
        description:
          'I had to fulfill my love for roller coasters while I had the chance, I moved to Sandusky, OH and worked at the best amusement park in the world. It was one of the best summers of my life!',
      },
    ],
  },
  {
    year: 2012,
    timelineItems: [
      {
        name: 'Started at Target 🎯',
        description:
          'I worked at Target for 6 years, it was a great job to have during college and I even continued working there on the weekends after beginning my career after college.',
      },
    ],
  },
  {
    year: 2011,
    timelineItems: [
      {
        name: 'Graduated High School 🎓',
        description:
          'I graduated from Fort Zumwalt West High School, a large public school just outside of St. Louis.',
      },
      {
        name: 'Began attending college at a local community college 🏫',
        description:
          "When I graduated high school I wasn't sure what I wanted to study so I opted to begin my first two years at a local community college. I always had the passion for roller coasters and computers, so I knew I either wanted to study computer science or architectural engineering.",
      },
      {
        name: 'Started my first job at Chick-Fil-A 🐓',
        description: "Not too much to say here, who doesn't like Chick-Fil-A?",
      },
      {
        name: 'Launched my first website 🚀',
        description:
          'I launched my first website and forum called GamerFreaks. I built an awesome and fun gaming community with over 1500 members!',
      },
    ],
  },
  {
    year: 2008,
    timelineItems: [
      {
        name: 'Moved to Tokyo 🇯🇵',
        description:
          'My family relocated to Tokyo for one year where I attended "The American School in Japan" (I know, a very original name) for my sophomore year of high school. But, it was a great school with a very challenging curriculum and an experience I\'ll never forget.',
      },
    ],
  },
  {
    year: 2005,
    timelineItems: [
      {
        name: 'Moved to St. Louis 📦',
        description:
          "I moved to O'Fallon, MO, a small city located thirty miles west of St. Louis. This is when I officially became a Cardinals fan. Go Cardinals! ⚾️",
      },
    ],
  },
  {
    year: 1993,
    timelineItems: [
      {
        name: 'Landed on Planet Earth 🌎',
        description:
          'Born as Alexander Knipfer in the great state of Kentucky.',
      },
    ],
  },
];

const Timeline = () => {
  return (
    <DefaultLayout>
      <Meta
        title="Timeline | Alex Knipfer"
        description="Alex Knipfer's timeline and history."
        url="https://alexknipfer.com/timeline"
      />
      <section>
        <Heading level="h1">Timeline</Heading>
        {timelineListItems.map(({ year, timelineItems }, index) => (
          <Fragment key={year}>
            <Heading level="h2">{year}</Heading>
            <ul className="list-none">
              {timelineItems.map((item) => (
                <TimelineStep key={item.name} {...item} />
              ))}
            </ul>
            {index !== timelineListItems.length - 1 && (
              <hr className="w-full border-horizontal-rule mb-6 mt-10" />
            )}
          </Fragment>
        ))}
      </section>
    </DefaultLayout>
  );
};

export default Timeline;
