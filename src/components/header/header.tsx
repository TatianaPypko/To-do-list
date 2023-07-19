interface HeaderProps {
  todoCount: number;
  doneCount: number;
}

const Header = ({ todoCount, doneCount }: HeaderProps) => {
  return (
    <div className="d-flex align-items-end">
      <h1 className="flex-grow-3">Todo List</h1>
      <h2 className="fs-6 text-secondary ms-5">
        {todoCount} more to do, {doneCount} done
      </h2>
    </div>
  );
};

export default Header;
