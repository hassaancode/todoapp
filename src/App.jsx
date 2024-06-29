import Header from "./components/Header";
import Additem from "./components/Additem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );

  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
    addItem(newItem);
  };

  return (
    <>
      <div>
        <Header title={"Todolist"} />
        <Additem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          itemsLength={items.length}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
