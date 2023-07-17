import "./add-form.css";
import { ChangeEvent, FormEvent } from "react";

interface AddFormProps {
  addItem: (event: FormEvent<HTMLFormElement>) => void;
  changedInput: string;
  setChangedInput: React.Dispatch<React.SetStateAction<string>>;
}

const AddForm: React.FC<AddFormProps> = ({
  addItem,
  changedInput,
  setChangedInput,
}) => {
  return (
    <form className="add-form d-flex" onSubmit={addItem}>
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
