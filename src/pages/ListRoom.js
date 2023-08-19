import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { List } from "antd";
import "antd/dist/antd.css";
// import { Row, Col, Pagination } from "antd";
import ProductCard from "../components/ProductCard";
import classes from "./Detail/Detail.module.css"
import roomApi from "../api/roomApi";
import SearchAllRoomComponent from "../components/ListRoom/SearchAllRoom";

const ListRoom = () => {
  const [room, setRoom] = useState([])
  const [filter, setFilter] = useState({
    check_in:"",
    check_out:"",
    num_people: 1
  })
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ; (async () => {
      try {
        setLoading(true)
        let response
        if(!filter.check_in || !filter.check_out){
          response = await roomApi.getAll()
        }else {
          response = await roomApi.filterRoom(filter)
        }
        setRoom(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [filter])
  return (
    <>
      <div className={classes.backgound}>
        <div className={classes.backgound_overlay}></div>
        <h1 className={classes.content_bg}> List Room </h1>
      </div>
      <div className="container-small">
        <SearchAllRoomComponent filter={filter} setFilter={setFilter}/>
        <List
          className="my-5 list-room"
          itemLayout="vertical"
          grid={{ gutter: 16, xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          loading={loading}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
            position: "bottom",
          }}
          dataSource={room? room: []}
          renderItem={(item) => (
            <div className="p-2">
              <ProductCard  room={item} />
            </div>
          )}
        />
      </div>
    </>
  );
};
export default ListRoom;
