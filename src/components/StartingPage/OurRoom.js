/* eslint-disable no-undef */
import { Spin } from "antd";
import React, { useEffect, useState } from "react";
// import { HomeFilled, StarFilled, StarTwoTone } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import roomApi from "../../api/roomApi";
import ProductCard from "./../ProductCard";

const img1 = require("./../../shared/image/product-cart/delexe-room-600x408.jpg");
const img2 = require("./../../shared/image/product-cart/double-room-600x408.jpg");
const img3 = require("./../../shared/image/product-cart/family-room-1-600x408.jpg");
const img4 = require("./../../shared/image/product-cart/family-room-600x408.jpg");

const OurRoom = () => {
  const [room, setRoom] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let response = await roomApi.getAll();
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return (
    <div className="container-small">
      <div className="title-beauty text-center">
        <span className="icon-title-beauty">
          <i class="fas fa-home"></i>
        </span>
        <span className="luxury">Luxury</span>
        <h2 className="our-rooms">Our Rooms</h2>
        <p className="description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        </p>
      </div>
      {loading && <Spin size="large" className="mx-auto w-100" />}
      <Swiper
        loop={true}
        className="carousel-swiper"
        autoplay={false}
        pagination={false}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          820: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1350: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {room &&
          room.length > 0 &&
          room.map((item) => {
            return (
              <SwiperSlide>
                <ProductCard room={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default OurRoom;
