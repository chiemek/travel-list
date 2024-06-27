import { useState } from "react";
import Item from "./Items";

const PackingLists = ({ items, onDelete, onUpdate, onReset }) => {
  const [sortBy, setSortBy] = useState("desc");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "desc")
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc)); // sort by asc order
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by Input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by Packed items</option>
        </select>
        <button onClick={onReset}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingLists;
