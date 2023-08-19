import { Button, message, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import feedbackApi from "../../api/feedbackApi";
import serviceApi from "../../api/serviceApi";
import ModalAddService from "./ModalAdd";

const ServiceManager = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [room, setRoom] = useState(null);
  const [listRoom, setListRoom] = useState([]);
  const getRoom = async () => {
    const response = await serviceApi.getAll();
    setListRoom(response.data);
  };
  useEffect(() => {
    getRoom();
  }, []);
  const deleteRoom = async (id) => {
    const del = await serviceApi.remove(id);
    getRoom();
    return del;
  };
  const columns = [
    {
      title: "Mã service",
      dataIndex: "type_id",
    },
    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "giá",
      dataIndex: "price",
    },
    {
      title: "Đơn vị",
      dataIndex: "unit",
    },

    {
      render: (text, record) => (
        <Space size="middle">
          <a
            href="#"
            onClick={() => {
              setRoom(record);
              setIsModalVisible(true);
            }}
          >
            Edit
          </a>
          <a
            onClick={() => {
              deleteRoom(record.type_id);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  console.log(listRoom, "asd");
  const updateFeedback = async (arg) => {
    let response;
    if (arg.id) {
      console.log(arg, arg?.id, "sdsd");
      response = await serviceApi.update(arg);
      setIsModalVisible(false);
      setRoom(null)
    } else {
      console.log(arg, "sdsd");

      response = await serviceApi.add(arg);
      setIsModalVisible(false);
    }
    message.success("success");
    getRoom();
    return response;
  };
  return (
    <div className="container-small">
      <h1>Service Manager</h1>
      <Button onClick={() => setIsModalVisible(!isModalVisible)}>
        Add Service
      </Button>
      <Table columns={columns} dataSource={listRoom} />

      <ModalAddService
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        room={room}
        setRoom={updateFeedback}
      />
    </div>
  );
};

export default ServiceManager;
