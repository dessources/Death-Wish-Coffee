import React from "react";

import { sortSection } from "../styles/Shop.module.css";
export default function ProductSort({ handleChange, sortOrder, quantity }) {
  return (
    <div className={sortSection}>
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
