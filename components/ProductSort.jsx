import React from "react";

export default function ProductSort({ className, handleChange, quantity }) {
  return (
    <div className={className}>
      <span>{quantity} products found</span>
      <select aria-label="Sort Order" onChange={(e) => handleChange(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price-ascending">Price low to high</option>
        <option value="price-descending">Price high to low</option>
        <option value="created-descending">Newest</option>
        <option value="name-ascending">A-Z</option>
        <option value="name-descending">Z-A</option>
      </select>
    </div>
  );
}
