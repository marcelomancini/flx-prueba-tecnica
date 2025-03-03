import React from 'react';
import { Modal, Form, Input, Select, Row, Col, Button } from 'antd';

const { Option } = Select;

const UserFormModal = ({ visible, onCancel, onFinish, form, editingUser }) => {
  return (
    <Modal
      title={editingUser ? "Editar Usuario" : "Crear Usuario"}
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} onFinish={onFinish} layout="vertical" requiredMark={false}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Nombre"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastname"
              label="Apellido"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="username"
              label="Usuario"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Correo Electrónico"
              rules={[{ required: true, type: 'email', message: 'Este campo es requerido' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="age"
              label="Edad"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="status"
              label="Estado"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
            >
              <Select>
                <Option value="active">Activo</Option>
                <Option value="inactive">Inactivo</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row justify="end">
          <Col>
            <Button type="primary" htmlType="submit">Guardar</Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default UserFormModal;