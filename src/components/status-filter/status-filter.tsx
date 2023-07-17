interface StatusFilterProps {
  setFilter: (filter: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({ setFilter }) => {
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => handleFilterChange("all")}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => handleFilterChange("active")}
      >
        Active
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => handleFilterChange("done")}
      >
        Done
      </button>
    </div>
  );
};

export default StatusFilter;
