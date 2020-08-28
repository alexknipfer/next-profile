const careers = [
  {
    jobTitle: 'Full Stack Developer',
    companyName: 'Ascendum Digital',
    location: 'Cincinnati, OH',
    timeSpan: 'April 2018 - Present',
  },
  {
    jobTitle: 'Full Stack Developer',
    companyName: 'Hoperator',
    location: 'St. Louis, MO',
    timeSpan: 'June 2017 - April 2018',
  },
];

const Careers: React.FC = () => {
  return (
    <div className="border-l border-black border-solid pl-5 mb-10">
      <div className="uppercase text-copy-headerLight text-3xl leading-9 mb-3">
        Careers
      </div>
      {careers.map((job, index) => (
        <div className="mb-4" key={index}>
          <div className="text-black text-base">{job.jobTitle}</div>
          <span className="font-bold text-base text-black">
            {job.companyName}
          </span>
          <span className="text-base text-black font-thin">
            {' '}
            - {job.location}, {job.timeSpan}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Careers;
