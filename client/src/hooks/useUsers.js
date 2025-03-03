import { useState, useEffect } from 'react';

const apiUrl = "http://localhost:4000/users";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const createUser = async (userData) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const newUser = await response.json();
      setUsers([...users, newUser]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const updateUser = async (id, updatedData) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      const updatedUser = await response.json();
      setUsers(users.map(user => (user.id === id ? updatedUser : user)));
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
  };

  const handleDeleteConfirm = () => {
    if (userToDelete) {
      deleteUser(userToDelete.id);
      setUserToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setUserToDelete(null);
  };

  return {
    users,
    editingUser,
    userToDelete,
    setEditingUser,
    createUser,
    updateUser,
    deleteUser,
    handleDeleteClick,
    handleDeleteConfirm,
    handleDeleteCancel,
  };
};

export default useUsers;