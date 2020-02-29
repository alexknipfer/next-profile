const linkClasses = [
  'hidden',
  'hover:text-white',
  'hover:bg-primaryGray',
  'link',
  'cursor-pointer',
  'md:flex',
  'text-4xl',
  'px-4',
  'uppercase',
  'no-underline',
  'h-55',
  'items-center',
];

const DefaultLayout = ({ children }) => {
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
          border: 1px solid #443a3a;
          letter-spacing: 0.2em;
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
