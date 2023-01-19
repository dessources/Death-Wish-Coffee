import React from "react";

export default function ProductSort({ className, handleChange, sortOrder, quantity }) {
  return (
    <div className={className}>
      <span>{quantity} products</span>
      <div>
        <select aria-label="Sort Order" value={sortOrder} onChange={(e) => handleChange(e.target.value)}>
          <option value="">Sort By</option>
          <option value="price-ascending">Price low to high</option>
          <option value="price-descending">Price high to low</option>
          <option value="created-descending">Newest</option>
          <option value="name-ascending">A-Z</option>
          <option value="name-descending">Z-A</option>
        </select>
      </div>
    </div>
  );
}
