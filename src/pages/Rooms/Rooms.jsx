import React from "react";
import "./Rooms.css";
import img1 from "../../assets/2kisi.jpg";
import img2 from "../../assets/3kisi.jpg";
import img3 from "../../assets/aile.jpg";

const Rooms = () => {
  return (
    <div className="rooms-container">
      <div className="rooms-left">
        <div className="image">
          <img src={img1} alt="" />
          <h5>2 People</h5>
        </div>
        <div className="image">
          <img src={img2} alt="" />
          <h5>3 People</h5>
        </div>
        <div className="image">
          <img src={img3} alt="" />
          <h5>Family</h5>
        </div>
      </div>
      <div className="rooms-right">
        <div className="top">
          <p>
            A two-person room in a holiday setting offers a cozy and comfortable
            retreat perfect for couples, friends, or family members traveling
            together. These rooms are thoughtfully designed to provide ample
            space and privacy while maintaining an intimate atmosphere.
          </p>
        </div>
        <div className="middle">
          <p>
            A three-person room in a holiday setting is designed to provide a
            comfortable and convenient stay for small families, groups of
            friends, or traveling companions. These rooms offer a blend of
            space, functionality, and modern comforts to ensure a relaxing and
            enjoyable experience.
          </p>
        </div>
        <div className="bottom">
          <p>
            A family room in a holiday setting is the ideal accommodation for
            families seeking a comfortable and enjoyable stay together. Designed
            with both parents and children in mind, these rooms offer ample
            space and a variety of features to ensure that everyone feels at
            home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
