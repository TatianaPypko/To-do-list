import { useState } from "react";

interface StatusFilterProps {
  setFilter: (filter: string) => void;
}

const StatusFilter = ({ setFilter }: StatusFilterProps) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setActiveFilter(newFilter);
  };

  const handleButtonClick = (filter: string) => {
    setActiveFilter(filter);
    handleFilterChange(filter);
  };

  return (
    <div className="btn-group gap-1">
      <button
        type="button"
        className={`btn ${activeFilter === "all" ? "btn-info" : "btn-outline-secondary"}`}
        onClick={() => handleButtonClick("all")}
      >
        All
      </button>
      <button
        type="button"
        className={`btn ${activeFilter === "active" ? "btn-info" : "btn-outline-secondary"}`}
        onClick={() => handleButtonClick("active")}
      >
        Active
      </button>
      <button
        type="button"
        className={`btn ${activeFilter === "done" ? "btn-info" : "btn-outline-secondary"}`}
        onClick={() => handleButtonClick("done")}
      >
        Done
      </button>
    </div>
  );
};

export default StatusFilter;
