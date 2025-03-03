import React from 'react';
import { Row, Col, Space, Input, Select, Button } from 'antd';

const { Search } = Input;
const { Option } = Select;

const SearchAndFilter = ({ onSearch, onFilterChange, onAddUser, searchTerm, statusFilter }) => {
  return (
    <Row justify="space-between" align="middle" style={{ padding: '0 98px', marginBottom: '20px' }}>
      <Col>
        <Space>
          <Search
            placeholder="Buscar usuarios"
            onSearch={onSearch}
            style={{ width: 200 }}
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
          <Select
            placeholder="Filtrar por estado"
            onChange={onFilterChange}
            style={{ width: 200 }}
            value={statusFilter}
            allowClear
          >
            <Option value="all">Todos</Option>
            <Option value="active">Activos</Option>
            <Option value="inactive">Inactivos</Option>
          </Select>
        </Space>
      </Col>
      <Col>
        <Button type="primary" onClick={onAddUser}>Agregar usuario</Button>
      </Col>
    </Row>
  );
};

export default SearchAndFilter;