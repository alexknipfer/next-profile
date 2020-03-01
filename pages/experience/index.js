import DefaultLayout from '../../components/default-layout';
import Careers from '../../components/experience/careers';
import Education from '../../components/experience/education';
import Technologies from '../../components/experience/technologies';

const Experience = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-1 col-auto">
          <Careers />
          <Education />
          <Technologies />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Experience;
