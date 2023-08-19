import React from "react";

import "./Calendar.css";
import { Calendar } from "antd";

const MyCalendar = () => {
  return (
    <>
      <h3 className="second_font">calendar</h3>
      <div className="calendar">
        <div className="my_calendar_body">
          <Calendar  />
        </div>
        <ul className="intruction">
          <li>
            <span className="white"></span>
            <span>Available</span>
          </li>
          <li>
            <span className="choosing"></span>
            <span>Booked</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MyCalendar;
