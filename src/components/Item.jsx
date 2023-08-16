import PackingList from "./PackingList";

function Item({ item }) {
  return (
    <>
      <li>
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
          {item.quantity} {item.description}
        </span>
        <button className="btn">✖</button>
      </li>
    </>
  );
}

export default Item;
