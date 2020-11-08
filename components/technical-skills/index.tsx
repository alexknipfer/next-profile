import GraphQLIcon from '../../public/static/icons/graphql.svg';
import ReactIcon from '../../public/static/icons/react.svg';
import JavaScriptIcon from '../../public/static/icons/javascript.svg';
import AngularIcon from '../../public/static/icons/angular.svg';
import NextIcon from '../../public/static/icons/nextjs.svg';
import NodeIcon from '../../public/static/icons/nodejs.svg';

const technicalSkills = [
  {
    name: 'TypeScript & JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'React & React Native',
    icon: ReactIcon,
  },
  {
    name: 'Angular',
    icon: AngularIcon,
  },
  {
    name: 'NextJS',
    icon: NextIcon,
  },
  {
    name: 'NodeJS',
    icon: NodeIcon,
  },
  {
    name: 'GraphQL',
    icon: GraphQLIcon,
  },
];

const TechnicalSkills: React.FC = () => (
  <div className="grid grid-cols-2 auto-rows-auto gap-5 mb-5">
    {technicalSkills.map(({ icon: Icon, name }) => (
      <div
        key={name}
        className="border-card-border border rounded p-5 flex items-center text-sm"
      >
        <Icon width={30} height={30} fill="#443a3a" className="mr-5" />
        {name}
      </div>
    ))}
  </div>
);

export default TechnicalSkills;
