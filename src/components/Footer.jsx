import React from "react";

const Footer = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start Adding items to your Packing list</em>
      </footer>
    );

  const numberOfItems = items.length;
  const packed = items.reduce((acc, cur) => acc + cur.packed, 0);
  const percentage = Math.round((packed / numberOfItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em> You got everything ready to go 🛫</em>
      ) : (
        <em>
          You Have {numberOfItems} items on your list, and you've already packed{" "}
          {packed} ({percentage})%
        </em>
      )}
    </footer>
  );
};

export default Footer;
