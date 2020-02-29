import { NextPage } from 'next';

const linkClasses = [
  'hidden',
  'hover:text-white',
  'hover:bg-primaryGray',
  'link',
  'cursor-pointer',
  'md:flex',
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
      <div className="h-full p-20">
        <div>{children}</div>
      </div>

      <style jsx>{`
        .link {
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
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .project-link {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .experience-link {
          position: absolute;
          left: -96px;
          top: 40%;
          transform: rotate(90deg);
        }

        .contact-link {
          position: absolute;
          right: -64px;
          top: 40%;
          transform: rotate(270deg);
        }
      `}</style>
    </div>
  );
};

export default DefaultLayout;
