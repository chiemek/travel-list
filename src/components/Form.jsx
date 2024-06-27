import React, { useState } from "react";

const Form = ({ addItems }) => {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc) return;

    // creating new item based on the input recieved
    const newItem = { desc, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // add the new item to the state created
    addItems(newItem);

    // created a state for description and quantity
    setDesc("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for the Trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items...."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
