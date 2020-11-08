import NowPlaying from '../now-playing';
import LinkedInIcon from '../../public/static/icons/linkedin.svg';
import TwitterIcon from '../../public/static/icons/twitter.svg';
import GithubIcon from '../../public/static/icons/github.svg';
import InstagramIcon from '../../public/static/icons/instagram.svg';
import EmailIcon from '../../public/static/icons/email.svg';

const socialAccounts = [
  {
    link: 'https://twitter.com/knipferalex',
    icon: TwitterIcon,
  },
  {
    link: 'https://github.com/alexknipfer',
    icon: GithubIcon,
  },
  {
    link: 'https://instagram.com/alexknipfer',
    icon: InstagramIcon,
  },
  {
    link: 'https://www.linkedin.com/in/alex-knipfer-4381a6115/',
    icon: LinkedInIcon,
  },
  {
    link:
      'mailto:alexanderknipfer@gmail.com?subject=Reaching out from alexknipfer.com',
    icon: EmailIcon,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center py-6">
      <NowPlaying />
      <div className="flex justify-around mt-4 w-64">
        {socialAccounts.map(({ link, icon }) => {
          const Icon = icon;

          return (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-navigation-hover rounded transition duration-300"
            >
              <Icon width={20} height={20} fill="#443a3a" />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
