import { ChangeEvent } from "react";
import "./search-panel.css";

interface SearchPanelProps {
  searchItem: string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ searchItem, setSearchItem }) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  return (
    <input
      className="search-panel"
      placeholder="search"
      value={searchItem}
      onChange={handleSearchChange}
    />
  );
};

export default SearchPanel;
