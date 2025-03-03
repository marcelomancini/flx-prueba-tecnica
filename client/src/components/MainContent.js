import React, { useContext } from 'react';
import UserList from './UserList';
import UserActions from './UserActions';
import { AppContext } from '../context/AppContext';

const MainContent = () => {
  const { searchTerm, setSearchTerm, statusFilter, setStatusFilter, showModal } = useContext(AppContext);

  return (
    <>
      <UserActions
        onSearch={setSearchTerm}
        onFilterChange={setStatusFilter}
        onAddUser={showModal}
        searchTerm={searchTerm}
        statusFilter={statusFilter}
      />
      <UserList />
    </>
  );
};

export default MainContent;