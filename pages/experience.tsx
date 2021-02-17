import DefaultLayout from '@/components/default-layout';
import Heading from '@/components/heading';
import { NextPage } from 'next';
import Meta from '@/components/meta';
import JobDetails from '@/components/job-details';

const jobItems = [
  {
    companyName: 'Ascendum',
    duration: 'May 2018 - Present',
    companyWebsiteUrl: 'https://ascendum.com',
    jobTitle: 'Full Stack Engineer',
    jobListItems: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    ],
  },
  {
    companyName: 'Hoperator',
    duration: 'June 2017 - May 2018',
    companyWebsiteUrl: 'https://hoperator.com',
    jobTitle: 'Full Stack Engineer',
    jobListItems: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    ],
  },
];

const Experience: NextPage = () => {
  return (
    <DefaultLayout>
      <Meta />
      <Heading level="h1">Experience</Heading>
      <p className="text-gray-700 dark:text-gray-200 mb-10">
        Curious to hear more about my experience? You&apos;re in the right
        place! I graduated with a degree in Computer Science in 2017, I&apos;ve
        had the opportunity to work at some awesome places since then!
      </p>
      <Heading level="h2" className="mb-4">
        Where I&apos;ve Worked
      </Heading>
      {jobItems.map((jobItem, index) => (
        <JobDetails key={`${jobItem.companyName}-${index}`} {...jobItem} />
      ))}
    </DefaultLayout>
  );
};

export default Experience;
