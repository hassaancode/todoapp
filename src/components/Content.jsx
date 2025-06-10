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
        <p className="animate-[frombottom_500ms]"> Your list is Empty</p>
      )}

      <p
        className={`text-white text-opacity-35 animate-[frombottom_300ms] sticky bottom-2 rounded-full px-4 py-2 ${
          itemsLength === 0 ? "" : "bg-neutral-800"
        }`}
      >
        {itemsLength === 0
          ? "Please add tasks"
          : ` ${itemsLength} ${itemsLength === 1 ? "Task" : "Tasks"}`}
      </p>
    </div>
  );
};

export default Content;
