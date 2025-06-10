import React from "react";
import { IoAddCircle } from "react-icons/io5";
function Additem({ newItem, setNewItem, handleSubmit }) {
  return (
    <div className="flex items-center justify-center px-2 animate-[frombottom_600ms]">
      <form
        onSubmit={handleSubmit}
        className="px-4 pl-5 py-3 flex items-center justify-center gap-4 w-full max-w-[700px] mt-20 bg-[#121212] rounded-lg"
      >
        <input
          className="bg-[#121212] outline-none  w-full autofill:shadow-[inset_0_0_0px_1000px_#121212]"
          type="text"
          id="addItem"
          placeholder="Add task"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          className=" hover:text-theme-bg focus:scale-90 transition-all"
          type="submit"
        >
          <IoAddCircle size={36} />
        </button>
      </form>
    </div>
  );
}

export default Additem;
