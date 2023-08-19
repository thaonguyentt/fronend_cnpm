import React from "react";
import classes from "./Communication.module.css";

const Communication = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={`${classes.communication} col-md-4`} >
          <div className={classes.watermark}>M</div>
          <div className={classes.communication_item}>
            <div className={classes.margin_custom}>HoZing Luxury Hotel</div>
            <div className={classes.margin_custom}>Via Serlas 546</div>
            <div className={classes.margin_custom}>
              6700 St. Moritz Switzerland
            </div>
          </div>
        </div>
        <div className={`${classes.communication} col-md-4`}>
          <div className={classes.watermark}>T</div>
          <div className={classes.communication_item}>
            <div className={classes.margin_custom}>Tel.: +41 (0)54 2344 00</div>
            <div className={classes.margin_custom}>Fax: +41 (0)542344 99</div>
            <div className={classes.margin_custom}>
              support@hozingluxury.com
            </div>
          </div>
        </div>
        <div className={`${classes.communication} col-md-4`}>
          <div className={classes.watermark}>H</div>
          <div className={classes.communication_item}>
            <div className={classes.margin_custom}>Check in 14: 18:00</div>
            <div className={classes.margin_custom}>Check out 8: 12:00</div>
            <div className={classes.margin_custom}>Online 24/7</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
