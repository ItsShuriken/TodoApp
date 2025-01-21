import React from 'react';

const TodoFilters = ({ filter, setFilter, handleSortToggle, sortActive }) => {
  return (
    <div>
      <button
        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700"
        onClick={handleSortToggle}
      >
        {sortActive ? "Disable Sort" : "Enable Sort"}
      </button>
      {/* Add more filter controls here */}
      {/*due data, today, overdue, week.  */}
    </div>
  );
};

export default TodoFilters;