import React, { useEffect, useState } from "react";
import "./AfterHeader.css";
import img1 from "../../assets/hotel4.jpg";
import img2 from "../../assets/hotel5.jpg";
import img3 from "../../assets/hotel2.jpg";

const AfterHeader = () => {
  const [image, setImage] = useState(img1);

  useEffect(() => {
    const images = [img1, img2, img3];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setImage(images[currentIndex]);
    }, 3000); // Change image every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="afterheader-container">
      <div className="after-container">
        
        <img src={image} alt="Slideshow" />
      </div>
      <h2>Photos From Our Hotel</h2>
    </div>
  );
};

export default AfterHeader;
