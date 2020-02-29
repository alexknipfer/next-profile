import { NextPage } from 'next';

const linkClasses = [
  'hover:text-white',
  'hover:bg-primaryGray',
  'link',
  'cursor-pointer',
];

const DefaultLayout: NextPage = ({ children }) => {
  return (
    <div className="h-full relative">
      <div className={`home-link ${linkClasses.join(' ')}`}>Home</div>
      <div className={`project-link ${linkClasses.join(' ')}`}>Projects</div>
      <div className={`experience-link ${linkClasses.join(' ')}`}>
        Experience
      </div>
      <div className={`contact-link ${linkClasses.join(' ')}`}>Contact</div>
      <div>{children}</div>

      <style jsx>{`
        .link {
          display: flex;
          align-items: center;
          height: 55px;
          border: 1px solid #443a3a;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 32px;
          letter-spacing: 0.2em;
          padding: 0 19px;
        }

        .home-link {
          display: block;
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .project-link {
          display: block;
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .experience-link {
          display: block;
          position: absolute;
          left: -93px;
          top: 40%;
          transform: rotate(90deg);
        }

        .contact-link {
          display: block;
          position: absolute;
          right: -60px;
          top: 40%;
          transform: rotate(270deg);
        }
      `}</style>
    </div>
  );
};

export default DefaultLayout;
