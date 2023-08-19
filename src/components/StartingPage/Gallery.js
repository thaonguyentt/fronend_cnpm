import React from "react";

const Gallery = () => {
  return (
    <div className="grid-gallery">
      <div className="content-service">
        <div className="bg-darker">
          <div className="content-title">
            <h3 className="service-title">Taxi</h3>
            <p className="service-desc">
              Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>
      <div className="content-service">
        <div className="bg-darker">
          <div className="content-title">
            <h3 className="service-title">Booking room</h3>
            <p className="service-desc">
              Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>
      <div className="content-service bg-display">
        <div className="content-title ">
          <h3 className="service-title">Touring</h3>
          <p className="service-desc">Ut enim ad minim veniam, quis nostrud</p>
        </div>
      </div>
      <div className="content-service bg-display">
        <div className="content-title">
          <h3 className="service-title">Massage</h3>
          <p className="service-desc">Ut enim ad minim veniam, quis nostrud</p>
        </div>
      </div>
      <div className="content-service">
        <div className="bg-darker">
          <div className="content-title">
            <h3 className="service-title">Restaurant</h3>
            <p className="service-desc">
              Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
