import list from "./utils/list";
import React, { useState, useMemo } from "react";
import Header from "./components/header/header";
import SearchPanel from "./components/search-panel/search-panel";
import StatusFilter from "./components/status-filter/status-filter";
import List from "./components/list/list";
import AddForm from "./components/add-form/add-form";
import { v4 as uuidv4 } from "uuid";

interface Item {
  id: string;
  task: string;
  important: boolean;
  isDone: boolean;
}

const App: React.FC = () => {
  const [changedData, setChangedData] = useState<Item[]>(list);
  const [changedInput, setChangedInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchItem, setSearchItem] = useState("");

  const id = uuidv4();

  const onDeleted = (id: string): void => {
    const index = changedData.findIndex((el) => el.id === id);
    if (index !== -1) {
      const newList = [
        ...changedData.slice(0, index),
        ...changedData.slice(index + 1)
      ];
      setChangedData(newList);
    }
  };

  const onToggleItem = (id: string, field: string): void => {
    setChangedData((prevList) => {
      const newList = prevList.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: !item[field] };
        }
        return item;
      });
      return newList;
    });
  };

  const addItem = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const inputValue = (event.currentTarget[0] as HTMLInputElement).value.trim();
    if (inputValue !== "") {
      const newItem: Item = {
        id: id,
        task: inputValue,
        important: false,
        isDone: false
      };
      const newList = [...changedData, newItem];
      setChangedData(newList);
      setChangedInput("");
    }
  };

  const filteredData = useMemo(() => {
    const newFilteredData = changedData.filter((item) => {
      const lowerCaseTask = item.task.toLowerCase();
      const lowerCaseSearchItem = searchItem.toLowerCase();

      switch (filter) {
        case "all":
          return lowerCaseTask.includes(lowerCaseSearchItem);
        case "active":
          return !item.isDone && lowerCaseTask.includes(lowerCaseSearchItem);
        case "done":
          return item.isDone && lowerCaseTask.includes(lowerCaseSearchItem);
        default:
          return false;
      }
    });
    return newFilteredData;
  }, [changedData, filter, searchItem]);

  const doneCount = changedData.filter((el) => el.isDone).length;
  const todoCount = changedData.length - doneCount;

  return (
    <div className="todo-app">
      <Header todoCount={todoCount} doneCount={doneCount} />
      <div className="top-panel d-flex flex-column gap-2 flex-sm-row flex-sm-wrapy">
        <SearchPanel searchItem={searchItem} setSearchItem={setSearchItem} />
        <StatusFilter setFilter={setFilter} />
      </div>
      <List
        onToggleItem={onToggleItem}
        changedData={filteredData}
        onDeleted={onDeleted}
      />
      <AddForm
        addItem={addItem}
        changedInput={changedInput}
        setChangedInput={setChangedInput}
      />
    </div>
  );
};

export default App;
