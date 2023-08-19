import React from "react";
import { Link } from "react-router-dom";
import "./BannerDetail.css";

const BannerDetail = (props) => {
  return (
    <div className={`carousel-item ${props.className}`}>
      <img src={props.src} className="d-block w-100 picture_detail" alt={props.alt} />
      <div className="carousel-caption d-none d-md-block">
        <div className="position_button_detail">
            <Link className="hozing_btn_img hozing_btn">
                From: <span className="hozing_span_detail">${props.price}</span> /Night
            </Link>
        </div>
        <h3 className="infor_detail_title">{props.title}</h3>
        <div className="info_detail">
            <p className="infor_detail_item">{props.area}m2</p>
            <p className="infor_detail_item">{props.amountOfPeople} Adult</p>
            <p className="infor_detail_item">City view</p>
            <p className="infor_detail_item">Lake view</p>
        </div>

      </div>
    </div>
  );
};

export default BannerDetail;