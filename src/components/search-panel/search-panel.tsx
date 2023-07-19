import { ChangeEvent } from "react";

interface SearchPanelProps {
  searchItem: string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
}

const SearchPanel = ({ searchItem, setSearchItem }: SearchPanelProps) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  return (
    <input
      className="p-1"
      placeholder="search"
      value={searchItem}
      onChange={handleSearchChange}
    />
  );
};

export default SearchPanel;
