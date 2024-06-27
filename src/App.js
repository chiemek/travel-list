import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PackingLists from "./components/PackingLists";
import Footer from "./components/Footer";

const initialItems = [
  { id: 1, desc: "Passports", quantity: 2, packed: false },
  { id: 2, desc: "Socks", quantity: 12, packed: false },
  { id: 3, desc: "Charger", quantity: 6, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheckItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      "Do you really want to delete everything?"
    );
    confirmed && setItems([]);
  };
  return (
    <div className="app">
      <Header />
      <Form addItems={handleAddItem} />
      <PackingLists
        items={items}
        onDelete={handleDelete}
        onUpdate={handleCheckItem}
        onReset={handleReset}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
