import categories from "../categories";

interface Props {
  onSelectChange: (category: string) => void;
}

const ExpanseFileter = ({ onSelectChange }: Props) => {
  return (
    <select
      className="form-select"
      name=""
      id=""
      onChange={(event) => onSelectChange(event.target.value)}
    >
      <option value=""> ALL</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default ExpanseFileter;
