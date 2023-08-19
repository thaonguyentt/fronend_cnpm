import React from "react";

const Banner = (props) => {
  return (
    <div className={`carousel-item carouselBanner ${props.className}`}>
      <div className="dark-background"></div>
      <img src={props.img} className="d-block w-100" alt="..." />
      <div className="carousel-cap d-md-block">
        <h5>Welcome to</h5>
        <h2 >OUR HOTEL</h2>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  );
};

export default Banner;
