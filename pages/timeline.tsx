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
    year: 2011,
    timelineItems: [
      {
        name: 'Graduated High School',
        description:
          'I graduated from Fort Zumwalt West High School, a large public school just outside of St. Louis. At this point, I knew I was going to attend college, not sure what I wanted to study, was just happy to be finished with High School.',
      },
    ],
  },
  {
    year: 1993,
    timelineItems: [
      {
        name: 'Landed on Planet Earth',
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
            {index !== timelineItems.length && (
              <hr className="w-full border-horizontal-rule mb-6 mt-10" />
            )}
          </Fragment>
        ))}
      </section>
    </DefaultLayout>
  );
};

export default Timeline;
