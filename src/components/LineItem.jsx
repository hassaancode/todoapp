import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
function LineItem({item, handleCheck, handleDelete }) {
  return (
    <li
      key={item.id}
      className="flex items-center justify-between border-b border-white border-opacity-15 p-3 hover:bg-black hover:bg-opacity-10   transition-colors"
    >
      <div className="flex item-center">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleCheck(item.id)}
          className="mr-4 w-5 h-5 cursor-pointer accent-theme-bg "
        />
        <label className={`${item.checked ? "line-through" : ""}`}>
          {item.item}
        </label>
      </div>
      <button className=" hover:text-theme-bg2">
        <FaRegTrashCan
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"
          size={24}
        />
      </button>
    </li>
  );
}

export default LineItem;
