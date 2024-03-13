import React from "react";

const SortSelect = ({ sortBy, setSortBy }) => {
  return (
    <select className="sortSelect" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
      <option value="input">Sort By input</option>
      <option value="packed">Sort By Done</option>
    </select>
  );
};

export default SortSelect;
