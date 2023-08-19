import { Button, message, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import feedbackApi from "../../api/feedbackApi";
import ModalAddUser from "./ModalAdd";

const UserManager = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [room, setRoom] = useState(null);
  const [listRoom, setListRoom] = useState([]);
  const getRoom = async () => {
    const response = await feedbackApi.getAll();
    setListRoom(response.data);
  }
  useEffect(() => {
    getRoom();
  }, []);
  const deleteRoom = async (id) => {
    const del =  await feedbackApi.remove(id);
    getRoom();
    return del
  };
  const columns = [
    {
      title: "Mã feedback",
      dataIndex: "feedback_id",
    },
    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "Sdt",
      dataIndex: "phone_number",
    },
    {
      title: "Mô tả",
      dataIndex: "note",
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
              deleteRoom(record.feedback_id);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
 
  console.log(listRoom, "asd")
  const updateFeedback = async (arg) => {
    console.log(arg, arg?.id,"sdsd")
    const response = await feedbackApi.update(arg);
    getRoom()
    message.success(" Edit success")
    setIsModalVisible(false)
    return response
  }
  return (
    <div className="container-small">
      <h1>Feedback Manager</h1>
      {/* <Button onClick={() => setIsModalVisible(!isModalVisible)}>
        Add Feedback
      </Button> */}
      <Table columns={columns} dataSource={listRoom} />

      <ModalAddUser
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        room={room}
        setRoom={updateFeedback}
      />
    </div>
  );
};

export default UserManager;
