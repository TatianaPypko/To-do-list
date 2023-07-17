import "./header.css";

interface HeaderProps {
  toDo: number;
  isDone: number;
}

const Header: React.FC<HeaderProps> = ({ toDo, isDone }) => {
  return (
    <div className="header d-flex">
      <h1>Todo List</h1>
      <h2>
        {toDo} more to do, {isDone} done
      </h2>
    </div>
  );
};

export default Header;
