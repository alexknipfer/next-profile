import DefaultLayout from '../../components/default-layout';
import Card from '../../components/projects/card';

const projects = [
  {
    name: 'Botsai',
    link: 'https://botsai.com',
    img: '/static/images/projects/botsai_project.png',
  },
  {
    name: 'Ascendum',
    link: 'https://ascendum.com',
    img: '/static/images/projects/ascendum_project.png',
  },
  {
    name: 'NPM Slackbot',
    link: 'https://github.com/alexknipfer/npm-bot',
    img: '/static/images/projects/npm_bot_project.png',
  },
  {
    name: 'Wanna see more?',
    link: 'https://github.com/alexknipfer',
    img: '/static/images/projects/github_project.png',
  },
];

const Projects = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-start md:items-center h-full overflow-y-scroll">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mb-20 md:mb-0">
          {projects.map((p, i) => (
            <Card name={p.name} link={p.link} img={p.img} key={i} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Projects;
