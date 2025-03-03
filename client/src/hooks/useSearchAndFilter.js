import { useState } from 'react';

const useSearchAndFilter = (users) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const searchUsers = (term) => {
    return users.filter(user => {
      const name = user.name ? user.name.toLowerCase() : '';
      const lastname = user.lastname ? user.lastname.toLowerCase() : '';
      const username = user.username ? user.username.toLowerCase() : '';
      return (
        name.includes(term.toLowerCase()) ||
        lastname.includes(term.toLowerCase()) ||
        username.includes(term.toLowerCase())
      );
    });
  };

  const filterUsersByStatus = (status) => {
    if (status === 'all') return users;
    return users.filter(user => user.status === status);
  };

  const filteredUsers = filterUsersByStatus(statusFilter);
  const finalUsers = searchUsers(searchTerm).filter(user => filteredUsers.includes(user));

  return {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    finalUsers,
  };
};

export default useSearchAndFilter;