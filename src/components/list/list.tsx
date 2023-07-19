import ListItem from "../item/item";

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

const List = ({ changedData, onToggleItem, onDeleted }: ListProps ) => {
  return (
    <ul className="list-group list">
      {changedData.map((item: Item) => (
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
