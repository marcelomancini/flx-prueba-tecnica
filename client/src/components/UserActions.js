import React from 'react';
import SearchAndFilter from './SearchAndFilter';

const UserActions = ({ onSearch, onFilterChange, onAddUser, searchTerm, statusFilter }) => {
  return (
    <SearchAndFilter
      onSearch={onSearch}
      onFilterChange={onFilterChange}
      onAddUser={onAddUser}
      searchTerm={searchTerm}
      statusFilter={statusFilter}
    />
  );
};

export default UserActions;