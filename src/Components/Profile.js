import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <img
          src="https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg"
          alt="profile"
          className="profile"
        />

        <div className="userName">EUNSEO KIM</div>
      </div>
    </>
  );
};
export default Profile;
