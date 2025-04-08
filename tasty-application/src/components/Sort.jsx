import React, { useState } from 'react';

const Sort = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Default to ascending

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSortChange(value, sortOrder); // Notify the parent component of the change
  };

  const handleOrderChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    onSortChange(sortOption, value); // Notify the parent component of the change
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sortOptions">Sort by: </label>
      <select id="sortOptions" onChange={handleSortChange} value={sortOption}>
        <option value="">None</option>
        <option value="id">ID</option>
        <option value="name">Name</option>
        <option value="cook_time">Cook Time</option>
        <option value="rating">Rating</option>
      </select>

      {sortOption && (
        <select id="sortOrder" onChange={handleOrderChange} value={sortOrder}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      )}
    </div>
  );
};

export default Sort;
