import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {router} from "./../../App"

const ProductCard = ({room}) => {
  const history = useHistory()
  return (
    <div className="product-main-card">
      <Link to={`${router.detailRoom}/${room?.room_code}`} className="product-card">
        <div className="product-card-head">
          <img  className="product-card-img" src={room?.link_image} alt="card" />
          <button className="book-now" onClick={() => history.push('/detail')}>Book now</button>
        </div>
        <div className="product-card-body text-center">
          <div className="product-card-content">
            <div className="price">Price Only: ${room?.price}</div>
            <div className="product-card-main-content">
              <h4 className="second-title">{room?.room_name}</h4>
              <div className="list-tag">
                <div className="tag">{room?.area}m2</div>
                <div className="tag">City view</div>
                <div className="tag">Lake view</div>
              </div>
              <p className="text-truncate text-dark">
                {room?.description}
              </p>
              <div className="list-icon">
                <div className="icon">
                  <i class="fas fa-coffee"></i>
                </div>
                <div className="icon">
                  <i class="fas fa-wifi"></i>
                </div>
                <div className="icon">
                  <i class="fas fa-utensils"> </i>
                </div>
                <div className="icon">
                  <i class="fas fa-gamepad"> </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
