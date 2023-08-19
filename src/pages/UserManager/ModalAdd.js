import React, { useEffect, useState } from "react";
import { Form, Input, Button, Modal, Checkbox } from "antd";
import { useForm } from "antd/lib/form/Form";
const ModalAddUser = ({ isModalVisible, setIsModalVisible, setRoom, room }) => {
  const [form] = useForm();
  const handleOk = () => {
    form.submit()
  };
  useEffect(() => {
    form.setFieldsValue(room);
  }, [room]);
  const onFinish = (values) => {
    console.log("Success:", values);
    setRoom({...values, id: room.feedback_id})

  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} name="basic" onFinish={onFinish}>
        <Form.Item label="name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="phone"
          name="phone_number"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="note" name="note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

       
      </Form>
    </Modal>
  );
};
export default ModalAddUser;
