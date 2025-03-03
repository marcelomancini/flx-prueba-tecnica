import React, { useContext } from 'react';
import { Row, Col } from 'antd';
import UserTable from './UserTable';
import { AppContext } from '../context/AppContext';

const UserList = () => {
  const { users, handleEditClick, handleDeleteClickWithModal } = useContext(AppContext);

  return (
    <Row style={{ padding: '0 98px' }}>
      <Col span={24}>
        <div style={{ backgroundColor: '#D9D9D914' }}>
          <UserTable
            users={users}
            onEdit={handleEditClick}
            onDelete={handleDeleteClickWithModal}
          />
        </div>
      </Col>
    </Row>
  );
};

export default UserList;