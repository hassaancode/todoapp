import React, { useState } from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete, itemsLength }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-5">
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p> Your list is Empty</p>
      )}

      <p className="text-white text-opacity-35 ">
        {itemsLength === 0
          ? "Please add item"
          : `${itemsLength} List ${itemsLength === 1 ? "item" : "items"}`}
      </p>
    </div>
  );
};

export default Content;
