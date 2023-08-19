import React from "react";

import "./ProfileInfo.css";

const ProfileInfo = ({user}) => {
    return (
        <div className="frofile-info-container">
            <h3> Your information</h3>
            <h5><span className="format-icon"><i class="fas fa-signature"></i></span> Name</h5>
            <p>{user?.first_name} {user?.last_name}</p>
            <h5><span className="format-icon"><i class="fas fa-address-card"></i></span>Address</h5>
            <p>{user?.address}</p>
            <h5><span className="format-icon"><i class="fas fa-phone-volume"></i></span>Your number</h5>
            <p>{user?.phone_number}</p>
            <h5><span className="format-icon"><i class="fas fa-birthday-cake"></i></span>Your email</h5>
            <p>{user?.email}</p>         
        </div>
        
    )
}

export default ProfileInfo;