import ListItem from "../item/item";
import "./list.css";

interface ListProps {
  changedData: Item[];
  onToggleItem: (id: string, field: string) => void;
  onDeleted: (id: string) => void;
}

interface Item {
  id: string;
  important: boolean;
  isDone: boolean;
  task: string;
}

const List: React.FC<ListProps> = ({ changedData, onToggleItem, onDeleted }) => {
  return (
    <ul className="list-group list">
      {changedData.map((item) => (
        <ListItem
          key={item.id}
          {...item}
          onToggleItem={onToggleItem}
          onDeleted={onDeleted}
        />
      ))}
    </ul>
  );
};

export default List;
