import React from 'react';
import { Modal, Typography } from 'antd';

const { Text } = Typography;

const DeleteConfirmationModal = ({ visible, onOk, onCancel, userToDelete }) => {
  return (
    <Modal
      title="Eliminar usuario"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText="Eliminar"
      cancelText="Cancelar"
      okButtonProps={{ danger: true }}
    >
      <p>
        ¿Está seguro que quiere eliminar el usuario{' '}
        <Text style={{ color: 'red' }}>{userToDelete?.name}</Text>?
      </p>
    </Modal>
  );
};

export default DeleteConfirmationModal;