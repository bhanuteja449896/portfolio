import React from 'react'
import linkedin from "./assests/linkedin_qrcode.png";
import github from "./assests/github_qrcode.png";
import instagram from "./assests/insta_qrcode.png";

import "./css/Qrcode.css"

const Qrcode = () => {
  return (
    <div className="qrcode-main">
        <div className="qrcode-header">
            <div className="qrcode-head">Follow me on any social media</div>
        </div>
        <div className="qrcode-body">
            <img src={linkedin} alt=""  onClick={() => window.open('https://www.linkedin.com/mwlite/in/bhanu-teja-makkineni-a65310265') }/>
            <img src={github} alt="" onClick={() => window.open('https://github.com/bhanuteja449896')} />
            <img src={instagram} alt="" onClick={() => window.open('https://www.instagram.com/bhanuteja__makkineni/profilecard/?igsh=NDg0OGx1NHo4Y25z') } />
        </div>
    </div>
  )
}

export default Qrcode;