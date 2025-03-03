import React from 'react';
import { Form, Input, Select } from 'antd';

const UserForm = ({ form, initialValues }) => {
  return (
    <Form form={form} initialValues={initialValues} layout="vertical">
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="lastname" label="Lastname" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="status" label="Status" rules={[{ required: true }]}>
        <Select>
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="inactive">Inactive</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default UserForm;