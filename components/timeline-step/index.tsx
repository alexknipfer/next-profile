import CheckmarkIcon from '../../public/static/icons/checkmark_outline.svg';

interface Props {
  name: string;
  description: string;
}

const TimelineStep: React.FC<Props> = ({ name, description }) => {
  return (
    <li className="mb-5 last:mb-0">
      <div className="flex items-center mb-2">
        <CheckmarkIcon width={24} height={24} className="mr-2" />
        <p className="font-bold text-copy-heading">{name}</p>
      </div>
      <p className="ml-8 text-copy-body">{description}</p>
    </li>
  );
};

export default TimelineStep;
