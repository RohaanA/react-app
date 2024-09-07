import { MouseEvent, useState } from "react";
function ListGroup() {
  let items = ["New York", "London", "Paris", "Berlin", "Tokyo"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => event.target;
  //   items = [];
  // Condition && <anything> return <anything> if condition is true.
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              (selectedIndex === index && "list-group-item active") ||
              "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
