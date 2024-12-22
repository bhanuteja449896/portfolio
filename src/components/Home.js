import React, { useState, useEffect } from "react";
import "./css/Home.css";
import Dp from './assests/dp.jpg';
import User from './assests/user.png';
import Call from './assests/call.png';

export const Home = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false); // Track if we're deleting
  const [pause, setPause] = useState(false); // Pause after typing or deleting

  const words = ['React Js Developer', 'Spring Boot Developer', 'Full-Stack Enthusiast', 'Creative Problem Solver'];

  // Function to simulate typing effect
  const typeWriterEffect = () => {
    if (pause) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
      // Delete the text
      setText((prevText) => prevText.slice(0, -1));
    } else {
      // Type new text if the current text is not longer than the word
      if (text.length < currentWord.length) {
        setText((prevText) => prevText + currentWord[text.length]);
      }
    }

    if (!isDeleting && text.length === currentWord.length) {
      // If the word is fully typed, start deleting after a pause
      setPause(true);
      setTimeout(() => {
        setIsDeleting(true);
        setPause(false);
      }, 1000); // 1 second pause after typing the full word
    } else if (isDeleting && text.length === 0) {
      // If the word is fully deleted, move to the next word
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Cycle through the words
    }
  };

  // Run the typewriter effect every 100ms
  useEffect(() => {
    const typingInterval = setInterval(typeWriterEffect, 100);

    return () => clearInterval(typingInterval); // Clean up the interval on unmount
  }, [text, isDeleting, wordIndex, pause]);

  // Handle cursor visibility for blinking effect
  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Cursor blinks every 500ms

    return () => clearInterval(cursorBlinkInterval);
  }, []);

  function Info() {
    return (
      <div className="info">
        <div className="info-name">Hi, I'm Makkineni Bhanu Teja</div>
        <div className="info-reactjs-dev">
          I'm a{" "}
          <span style={{ fontWeight: 'bold', color: 'black' }}>
            {text}
          </span>
          {cursorVisible && <span>|</span>} {/* Blinking cursor */}
        </div>
        <div className="info-location">Based in Hyderabad, India.</div>
      </div>
    );
  }

  function Image() {
    return (
      <div className="Image-container">
        <div className="image-wrapper">
          <img src={Dp} alt="Img" />
        </div>
      </div>
    );
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
