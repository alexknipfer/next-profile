interface Props {
  listItems: string[];
}

const List: React.FC<Props> = ({ listItems }) => {
  return (
    <ul className="text-gray-700 dark:text-gray-200 list-arrow">
      {listItems.map((item, index) => (
        <li className="flex mb-2" key={`${item}-${index}`}>
          <span>▹</span>
          <p className="ml-2">{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
