import Heading from '@/components/heading';
import List from '@/components/list';

interface Props {
  companyName: string;
  duration: string;
  companyWebsiteUrl: string;
  jobTitle: string;
  jobListItems: string[];
}

const JobDetails: React.FC<Props> = ({
  companyName,
  duration,
  companyWebsiteUrl,
  jobTitle,
  jobListItems,
}) => {
  return (
    <div className="border-l border-gray-700 border-dashed pl-5 mb-10">
      <Heading level="h3" className="mb-2">
        {jobTitle}&nbsp;@&nbsp;
        <a
          href={companyWebsiteUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-700"
        >
          {companyName}
        </a>
      </Heading>
      <p className="text-gray-700 dark:text-gray-200 mb-4">{duration}</p>
      <List listItems={jobListItems} />
    </div>
  );
};

export default JobDetails;
