import React from "react";
import classes from './Coppyright.module.css';

const Coppyright = () => {
    const year = new Date().getFullYear();
    return (
        <div className={classes.coppyright}>
            <p>
                @{year} Hozing Hotel Booking.
                <br />
                Design and Develop by Hoa and Thao
            </p>
        </div>
    )
}

export default Coppyright;