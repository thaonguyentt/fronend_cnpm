import { Button, message, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import bookingApi from "../../api/bookingApi";
import feedbackApi from "../../api/feedbackApi";
import ModalAddBooking from "./ModalAdd";

const BookingManager = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [room, setRoom] = useState(null);
  const [listRoom, setListRoom] = useState([]);
  const getRoom = async () => {
    const response = await bookingApi.get();
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
      title: "Mã booking",
      dataIndex: "book_id",
    },
    {
      title: "Mã phòng",
      dataIndex: "room_code",
    },
    {
      title: "Mã khách",
      dataIndex: "customer_id",
    },
    {
      title: "Số người lớn",
      dataIndex: "num_adult",
    },
    {
      title: "Số trẻ em",
      dataIndex: "num_children",
    },
    {
      title: "check in",
      dataIndex: "check_in",
    },
    {
      title: "check out",
      dataIndex: "check_out",
    },
    {
      title: "Số đêm",
      dataIndex: "num_night",
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
      <h1>Booking Manager</h1>
      <Button onClick={() => setIsModalVisible(!isModalVisible)}>
        Add Booking
      </Button>
      <Table columns={columns} dataSource={listRoom} />

      <ModalAddBooking
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        room={room}
        setRoom={updateFeedback}
      />
    </div>
  );
};

export default BookingManager;
