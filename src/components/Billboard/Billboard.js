import React, { useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from "../../asset/image.jpg";
import video from "../../asset/video.mp4";
import "./Billboard.css";
import T9Keyboard from "../T9Keyboard/T9Keyboard";
const Billboard = () => {
  const [text, setText] = useState("");
  const videoRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="carouselConatiner">
      <Carousel autoPlay infiniteLoop interval={3000}>
        <div>
          <div className="textVideoOverlay">
          <h3>Smartphones With High Display</h3>
          </div>
          <video
            ref={videoRef}
            controls
            width="100%"
            src={video}
            type="video/webm"
            autoPlay
            loop
            muted="true"
          >
            Your browser does not support the video tag.
          </video>
          <p className="legend">Video 1</p>
        </div>
        <div className="textContainer">
          <h2>Samsung</h2>
          <p>
            Samsung phones are renowned for their innovation, design, and
            performance. They offer a wide range of models catering to different
            budgets and needs. Features often include high-quality displays,
            powerful processors, advanced cameras, and long-lasting batteries.
            Samsung's Galaxy series is particularly popular, offering flagship
            devices with cutting-edge technology.
          </p>
          <p className="legend">Plain Text</p>
        </div>
        <div>
          <div className="image-container">
            <img src={image} alt="Image 1" />
            <div className="text-overlay">
              <h3>Samsung Galaxy S23 Ultra</h3>
            </div>
            <p className="legend">Image 1</p>
          </div>
        </div>
      </Carousel>
      <div className="container">
        <h3 className="output">Hai, welcome! {text}</h3>
        <div className="input-container">
          <input
            className="inputBox"
            type="text"
            value={text}
            placeholder="Type here..."
            onChange={handleChange}
          />
        </div>
      </div>
      <T9Keyboard />
    </div>
  );
};

export default Billboard;
