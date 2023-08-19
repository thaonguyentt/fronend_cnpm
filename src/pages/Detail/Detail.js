import React, { useEffect, useState } from "react";
import SearchComponent from "./../../components/ListRoom/Search";
import { router } from "./../../App";
import classes from "./Detail.module.css";
import Tab from "./Tab";
import Details from "./Details";
import Gallery from "./Gallery";
import roomApi from "../../api/roomApi";
import { Route, useHistory, useParams } from "react-router";
import { message, notification, Skeleton } from "antd";
import bookingApi from "../../api/bookingApi";
// import OtherRoom from "./OtherRoom";

const Detail = () => {
  const params = useParams();
  const [room, setRoom] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingBooking, setloadingBooking] = useState(false);
  const [booking, setBooking] = useState({});
  const history = useHistory()
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        let response = await roomApi.getAll();
        if (response.data && Array.isArray(response.data)) {
          let roomDetail = response.data.find(
            (item) => item.room_code === params.id
          );
          setRoom(roomDetail);
        }
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      setloadingBooking(true);
      try {
        const resul = await bookingApi.add({
          ...booking,
          customer_id: "2",
          room_code: room.room_code,
        });
        if (resul) {
          setloadingBooking(false);
          message.success("Booking success");
          history.push(router.card);
        }
      } catch (error) {
        console.log(error.message);
        setloadingBooking(false);
      }
    })();
  }, [booking]);
  if (loading) {
    return <Skeleton />;
  }
  return (
    <>
      <div className={classes.backgound}>
        <div className={classes.backgound_overlay}></div>
        <h1 className={classes.content_bg}> {room.room_name}</h1>
      </div>
      <div className={`container-small ${classes.main_background}`}>
        <div className={classes.main_room_detail}>
          <Tab />
          <Details room={room} />
        </div>
        <SearchComponent setBooking={setBooking} isloading={loadingBooking} />
        <Gallery />
      </div>
    </>
  );
};

export default Detail;
