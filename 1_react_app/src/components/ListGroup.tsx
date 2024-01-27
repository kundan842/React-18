import { MouseEvent, useState } from "react"; // onclick event class from react

// props object will have [cities], heading
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
  const { items, heading, onSelectItem } = props;

  //   items = [];
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  const [selectdIndex, setSelectdIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length == 0 && <p>no item found to display</p>}
        {items.map((item, index) => (
          <li
            className={
              index == selectdIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectdIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
