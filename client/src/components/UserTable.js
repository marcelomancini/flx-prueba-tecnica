import React from 'react';
import { Table, Tag, Space, Button } from 'antd';

const UserTable = ({ users, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Usuario',
      dataIndex: 'username',
      key: 'username',
      width: '30%',
      onHeaderCell: () => ({ style: { backgroundColor: '#0000000F' } }),
      onCell: () => ({ style: { backgroundColor: '#FFFFFF' } }),
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      onHeaderCell: () => ({ style: { backgroundColor: '#0000000F' } }),
      onCell: () => ({ style: { backgroundColor: '#FFFFFF' } }),
    },
    {
      title: 'Apellido',
      dataIndex: 'lastname',
      key: 'lastname',
      width: '30%',
      onHeaderCell: () => ({ style: { backgroundColor: '#0000000F' } }),
      onCell: () => ({ style: { backgroundColor: '#FFFFFF' } }),
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status === 'active' ? 'Activo' : 'Inactivo'}
        </Tag>
      ),
      width: '5%',
      onHeaderCell: () => ({ style: { backgroundColor: '#0000000F' } }),
      onCell: () => ({ style: { backgroundColor: '#FFFFFF' } }),
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => onEdit(record)}>Editar</Button>
          <Button type="link" danger onClick={() => onDelete(record)}>Eliminar</Button>
        </Space>
      ),
      width: '5%',
      onHeaderCell: () => ({ style: { backgroundColor: '#0000000F' } }),
      onCell: () => ({ 
        style: { backgroundColor: '#FFFFFF' },
      }),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={users}
      style={{ backgroundColor: '#D9D9D914' }}
      pagination={{ pageSize: 9, position: ['bottomRight'] }} 
    />
  );
};

export default UserTable;