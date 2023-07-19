import { ChangeEvent, FormEvent } from "react";

interface AddFormProps {
  addItem: (event: FormEvent<HTMLFormElement>) => void;
  changedInput: string;
  setChangedInput: React.Dispatch<React.SetStateAction<string>>;
}

const AddForm = ({
  addItem,
  changedInput,
  setChangedInput,
}: AddFormProps) => {
  return (
    <form className="mt-2 d-flex" onSubmit={addItem}>
      <input
        type="text"
        className="form-control"
        placeholder="Need to be done"
        value={changedInput}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setChangedInput(event.target.value)
        }
      />
      <button className="btn btn-outline-secondary">Add Item</button>
    </form>
  );
};

export default AddForm;
