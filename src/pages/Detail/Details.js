import React from "react";
// import { Link } from "react-router-dom";

import classes from "./Details.module.css";
import MyCalendar from "./Calendar";
// import pic1 from "../../shared/image/gallery-detail/family-room-1-545x405.jpeg";

const scrollGallery = () => {
  window.scrollTo(0, 1200);
};

const Details = ({ room }) => {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 left-infor-detail">
        <div className={classes.desc}>
          <h3 className={classes.second_font}>overview</h3>
          <div className={classes.content}>
            <p>{room.description}</p>
          </div>
        </div>
        <div className={classes.service}>
          <h1 className={classes.second_font}>service</h1>
          <ul className={classes.service_ul}>
            {/* <li>
              <span className={classes.style_span}>
                <i class="fas fa-check"></i>
              </span>
              Free-to-use smartphone (Free)
            </li>
            <li>
              <span className={classes.style_span}>
                <i class="fas fa-check"></i>
              </span>
              Safe-deposit box (Free)
            </li>
            <li>
              <span className={classes.style_span}>
                <i class="fas fa-check"></i>
              </span>
              Luggage storage (Free)
            </li> */}
            {room.service &&
              room.service.length > 0 &&
              room.service.map((service) => {
                return (
                  <li>
                    <span className={classes.style_span}>
                      <i class="fas fa-check"></i>
                    </span>
                    {service.name} ({service.price} {service.unit} / ngày)
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 right-infor-detail">
        <div className={classes.info_room_detail}>
          <div className={classes.price}>
            <span className={classes.time_night_details}>from:</span>
            <span className={classes.amount}>${room.price}</span>
            <span className={classes.time_night_details}> /Night</span>
          </div>
          <div className={classes.buttons}>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-6">
                <a
                  href="#"
                  onClick={scrollGallery}
                  className={`${classes.hozing_btn_img} ${classes.hozing_btn}`}
                >
                  image
                  <span className={classes.gallery_icon}>
                    <i class="fas fa-image"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-6">
                <a
                  className={`${classes.hozing_btn_video} ${classes.hozing_btn}`}
                  href="https://www.youtube.com/watch?v=6gbtKUSHz9E"
                >
                  video popup
                  <span className={classes.gallery_icon}>
                    <i class="fas fa-caret-square-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <ul className={`row ${classes.amenities}`}>
              <div className="row">
                <div className="col-lg-6 col-6">
                  <div className="row">
                    <div className="col-lg-3 col-3">
                      <div className={classes.feature_icon}>
                        <i class="fas fa-user-friends"></i>
                      </div>
                      <div className={classes.feature_icon}>
                        <i class="fas fa-coffee"></i>
                      </div>
                      <div className={classes.feature_icon}>
                        <i class="fas fa-utensils"></i>
                      </div>
                      <div
                        className={`${classes.feature_icon} ${classes.last_item}`}
                      >
                        <i class="fas fa-city"></i>
                      </div>
                    </div>
                    <div className={`col-lg-9 col-9 ${classes.vertical_line}`}>
                      <div className={classes.label}>{room.num_people} Adults</div>
                      <div className={classes.label}>Coffee</div>
                      <div className={classes.label}>Fastfood</div>
                      <div className={`${classes.label} ${classes.last_item}`}>
                        City View
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-6">
                  <div className="row">
                    <div className="col-lg-3 col-3">
                      <div className={classes.feature_icon}>
                        <i class="fas fa-map"></i>
                      </div>
                      <div className={classes.feature_icon}>
                        <i class="fas fa-wifi"></i>
                      </div>
                      <div className={classes.feature_icon}>
                        <i class="fas fa-gamepad"></i>
                      </div>
                      <div
                        className={`${classes.feature_icon} ${classes.last_item}`}
                      >
                        <i class="fas fa-eye"></i>
                      </div>
                    </div>
                    <div className={`col-lg-9 col-9 ${classes.vertical_line}`}>
                      <div className={classes.label}>65m2</div>
                      <div className={classes.label}>Wifi</div>
                      <div className={classes.label}>Game center</div>
                      <div className={`${classes.label} ${classes.last_item}`}>
                        Lake View
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <MyCalendar />
        </div>
      </div>
      <div className={classes.format_current_img}>
        <img
          src={room.link_image}
          className={classes.format_img_current}
        />
      </div>
    </div>
  );
};

export default Details;
