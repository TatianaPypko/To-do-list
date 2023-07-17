import "@fortawesome/fontawesome-free/css/all.css";
import "./item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExclamation } from "@fortawesome/free-solid-svg-icons";

interface ItemProps {
  important: boolean;
  isDone: boolean;
  id: string;
  task: string;
  onToggleItem: (id: string, field: string) => void;
  onDeleted: (id: string) => void;
}

const Item: React.FC<ItemProps> = ({
  important,
  isDone,
  id,
  task,
  onToggleItem,
  onDeleted,
}) => {
  let classNames = "item d-flex group-item";

  if (important) {
    classNames += " important";
  }

  if (isDone) {
    classNames += " done";
  }

  return (
    <li className={classNames}>
      <span
        className="item-label"
        onClick={() => onToggleItem(id, "isDone")}
      >
        {task}
      </span>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => onDeleted(id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <button
        type="button"
        className="btn btn-outline-success btn-sm"
        onClick={() => onToggleItem(id, "important")}
      >
        <FontAwesomeIcon icon={faExclamation} />
      </button>
    </li>
  );
};

export default Item;