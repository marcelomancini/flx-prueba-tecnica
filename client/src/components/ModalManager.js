import React, { useContext } from 'react';
import UserFormModal from './UserFormModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { AppContext } from '../context/AppContext';

const ModalManager = () => {
  const {
    isModalVisible,
    isDeleteModalVisible,
    handleCancel,
    onFinish,
    form,
    editingUser,
    userToDelete,
    handleDeleteConfirmWithModal,
    handleDeleteCancelWithModal,
  } = useContext(AppContext);

  return (
    <>
      <UserFormModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onFinish={onFinish}
        form={form}
        editingUser={editingUser}
      />

      <DeleteConfirmationModal
        visible={isDeleteModalVisible}
        onOk={handleDeleteConfirmWithModal}
        onCancel={handleDeleteCancelWithModal}
        userToDelete={userToDelete}
      />
    </>
  );
};

export default ModalManager;