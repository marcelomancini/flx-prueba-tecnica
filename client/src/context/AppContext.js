import React, { createContext, useState } from 'react';
import { Form } from 'antd';
import useUsers from '../hooks/useUsers';
import useSearchAndFilter from '../hooks/useSearchAndFilter';

// Crear el contexto
export const AppContext = createContext();

// Proveedor del contexto
export const AppContextProvider = ({ children }) => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  // Hook para manejar usuarios
  const {
    users,
    editingUser,
    userToDelete,
    setEditingUser,
    createUser,
    updateUser,
    deleteUser,
    handleDeleteClick,
    handleDeleteCancel,
  } = useUsers();

  // Hook para manejar búsqueda y filtrado
  const {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    finalUsers,
  } = useSearchAndFilter(users);

  // Función para mostrar el modal de creación/edición
  const showModal = () => {
    setIsModalVisible(true);
    setEditingUser(null);
    form.resetFields();
  };

  // Función para cancelar el modal de creación/edición
  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingUser(null);
    form.resetFields();
  };

  // Función para manejar el envío del formulario
  const onFinish = (values) => {
    if (editingUser) {
      updateUser(editingUser.id, values);
    } else {
      createUser(values);
    }
    setIsModalVisible(false);
  };

  // Función para manejar el clic en el botón de editar
  const handleEditClick = (user) => {
    setEditingUser(user);
    setIsModalVisible(true);
    form.setFieldsValue(user);
  };

  // Función para manejar el clic en el botón de eliminar
  const handleDeleteClickWithModal = (user) => {
    handleDeleteClick(user);
    setIsDeleteModalVisible(true);
  };

  // Función para confirmar la eliminación
  const handleDeleteConfirmWithModal = () => {
    if (userToDelete) {
      deleteUser(userToDelete.id);
    }
    setIsDeleteModalVisible(false);
  };

  // Función para cancelar la eliminación
  const handleDeleteCancelWithModal = () => {
    handleDeleteCancel();
    setIsDeleteModalVisible(false);
  };

  return (
    <AppContext.Provider
      value={{
        users: finalUsers,
        searchTerm,
        setSearchTerm,
        statusFilter,
        setStatusFilter,
        isModalVisible,
        isDeleteModalVisible,
        editingUser,
        userToDelete,
        showModal,
        handleCancel,
        onFinish,
        handleEditClick,
        handleDeleteClickWithModal,
        handleDeleteConfirmWithModal,
        handleDeleteCancelWithModal,
        form,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};