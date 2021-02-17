import DefaultLayout from '@/components/default-layout';
import Heading from '@/components/heading';
import { NextPage } from 'next';
import Meta from '@/components/meta';

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
      <div className="border-l border-gray-700 border-dashed pl-5 mb-4">
        <Heading level="h3" className="mb-2">
          Full Stack Engineer&nbsp;@&nbsp;
          <a
            href="https://ascendum.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700"
          >
            Ascendum
          </a>
        </Heading>
        <p className="text-gray-700 dark:text-gray-200">May 2018 - Present</p>
      </div>
      <div className="border-l border-gray-700 border-dashed pl-5">
        <Heading level="h3" className="mb-2">
          Full Stack Engineer&nbsp;@&nbsp;
          <a
            href="https://www.hoperator.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700"
          >
            Hoperator
          </a>
        </Heading>
        <p className="text-gray-700 dark:text-gray-200">May 2018 - Present</p>
      </div>
    </DefaultLayout>
  );
};

export default Experience;
