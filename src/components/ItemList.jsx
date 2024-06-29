import React from "react";
import LineItem from "./LineItem";
function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <ul className="w-full px-2 max-w-[700px] ">
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ItemList;
