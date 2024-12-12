import React, { useState } from "react";
import "./css/Home.css"
import Dp from './assests/dp.jpg';
import User from './assests/user.png';
import Call from './assests/call.png';

export const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function Info(){
    return(
      <div className="info">
        <div className="info-name">Hi I'm Makkineni Bhanu Teja</div>
        <div className="info-reactjs-dev">React Js Developer</div>
        <div className="info-location">Based in Hyderabad, India.</div>
        {/* <div className="view-works-container">
          <div className="view-works">View My Works</div>
        </div> */}
      </div>
    )
  }

  function Image(){
    return(
      <div className="Image-container">
        <div className="image-wrapper">
          <img src={Dp} alt="Img" />
        </div>
      </div>
    )
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="header-item">
          <img src={User} alt="user" />
          <div className="header-name">Bhanu Teja Makkineni</div>
        </div>
        <div className="header-item">
          <img src={Call} alt="Mobile" />
          <div className="header-mobile">(+91) 8328653599</div>
        </div>
      </div>
      <div className="home-content">
        <Info />
        <Image />

      </div>
    </div>
  );
};

export default Home;
