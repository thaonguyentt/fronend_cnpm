import React, { useEffect, useState } from "react";
import { Form, Input, Button, Modal, Checkbox } from "antd";
import { useForm } from "antd/lib/form/Form";
const ModalAddService = ({
  isModalVisible,
  setIsModalVisible,
  setRoom,
  room,
}) => {
  const [form] = useForm();
  const handleOk = () => {
    form.submit();
  };
  useEffect(() => {
    form.setFieldsValue(room);
  }, [room]);
  const onFinish = (values) => {
    console.log("Success:", values);
    setRoom({ ...values, id: room?.type_id || null });
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
        <Form.Item label="Tên" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="giá" name="price" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Đơn vị" name="unit" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalAddService;
