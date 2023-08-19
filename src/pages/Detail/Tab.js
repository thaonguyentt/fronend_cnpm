import React from "react";
import classes from "./Tab.module.css";
import { Link } from "react-router-dom";

const scroll_gallery_tab = () => {
    window.scrollTo(0, 1800);
}

const scroll_book_tab = () => {
    window.scrollTo(0, 1800);
}

const scroll_detail_Tab = () => {
    window.scrollTo(0, 1800);
}

const MainRoomDetal = () => {
    return (
        <div className={classes.container}>
            <ul className={classes.list_nav}>
                <li><a className={classes.item}>DETAIL</a></li>
                <li><a className={classes.item}>BOOKING FORM</a></li>
                <li><a className={classes.item}>GALLERY</a></li>
            </ul>
        </div>
    )
};

export default MainRoomDetal;