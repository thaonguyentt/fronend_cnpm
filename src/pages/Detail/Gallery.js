import React from "react";
import "./Gallery.css";
import BannerDetail from "./BannerDetail";
import pic1 from "../../shared/image/gallery-detail/family-room-1-545x405.jpeg";
import pic2 from "../../shared/image/gallery-detail/family-room-545x405.jpeg";
import pic3 from "../../shared/image/gallery-detail/single-room1-545x405.jpeg";
import pic4 from "../../shared/image/gallery-detail/Suite-room-1-545x405.jpeg";

const Gallery = (props) => {
  return (
    <div id={props.id}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
      <h1 className="format_other_room">Other Room</h1>
        <div className="carousel-inner">
          <BannerDetail 
            className="active"
            src={pic1}
            title="family room"
            area="905"
            amountOfPeople="2"
            alt="pic1"
            price="200"
          />
          <BannerDetail
            src={pic2}
            title="conneting room"
            area="25"
            amountOfPeople="2"
            alt="pic2"
            price="270"
          />
          <BannerDetail 
            src={pic3}
            title="single bed room"
            area="25"
            amountOfPeople="1"
            alt="pic3"
            price="50"
          />
          <BannerDetail 
            src={pic4}
            title="suite room"
            area="25"
            amountOfPeople="2"
            alt="pic4"
            price="200"
          />

          {/* <div className="carousel-item active">
            <img src={pic1} className="d-block w-100 picture_detail" alt="pic1" />
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block w-100 picture_detail" alt="pic2"  />
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100 picture_detail" alt="pic3"  />
          </div>
          <div className="carousel-item">
            <img src={pic4} className="d-block w-100 picture_detail" alt="pic4"  />
          </div> */}

        </div>
        <button
          className="carousel-control-prev button_detail"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next button_detail"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
