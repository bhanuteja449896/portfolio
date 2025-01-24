import React from "react";
import Leetcode from "./assests/leetcode.png";
import Dp from "./assests/dp.jpg";
import location from "./assests/location_icon.png";
import college from "./assests/college.png";
import tag from "./assests/tag.png";
import Badge100 from "./assests/badge100.png";
import Julybadge from "./assests/july_badge.png";
import Septbadge from "./assests/sept_badge.png";
import tick from "./assests/tick.png";
import days from "./assests/days.png";

import "./css/coding.css";

function Coding() {
  const values = {
    rank: 80713,
    name: "Bhanu Teja",
    location: "India",
    college: "Malla Reddy College of Engineering & Technology",
    python3_solved: 633,
    java_solved: 81,
    total_solved: 636,
    leetcode_total: 3431,
    easy_solved: 359,
    easy_total: 852,
    medium_solved: 247,
    medium_total: 1787,
    hard_solved: 30,
    hard_total: 792,
    active_days: 211,
    max_streak: 127,
  };

  return (
    <div className="leet-main">
      <div className="header-container">
        <div
          className="header"
          onClick={() =>
            window.open("https://leetcode.com/u/bhanutejamakkineni/")
          }
        >
          <img src={Leetcode} alt="" />
          <div>LEETCODE</div>
        </div>
      </div>
      <div className="leetcode-body">
        <div style={{ width: "25%" }}>
          <div
            className="user-container"
            onClick={() =>
              window.open("https://leetcode.com/u/bhanutejamakkineni/")
            }
          >
            <div className="user-details">
              <div className="Image">
                <img src={Dp} alt="" />
              </div>
              <div className="Name-container">
                <div className="name">Name : {values.name}</div>
                <div className="rank">Rank : {values.rank}</div>
              </div>
            </div>
            <div className="location-container">
              <div className="location">
                <img src={location} alt="" />
                <div className="location-address">{values.location}</div>
              </div>
              <div className="location">
                <img src={college} alt="" />
                <div className="location-address">{values.college}</div>
              </div>
              <div className="location" id="java">
                <img src={tag} alt="" />
                <div className="location-address">
                  <div className="location-java">Java</div>
                  <div className="location-java">Python</div>
                </div>
              </div>
            </div>
            <div className="leet-border-line-container">
              <div className="leet-border-line"></div>
            </div>
            <div className="language-container">
              <div className="language-header">Languages</div>
              <div className="languages">
                <div className="language-java">
                  <div className="language-java-name">Python3</div>
                  <div className="language-problem-count">
                    <p>{values.python3_solved}</p> problems sovled
                  </div>
                </div>
                <div className="language-java">
                  <div className="language-java-name">Java</div>
                  <div className="language-problem-count">
                    <p>{values.java_solved}</p> problems sovled
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "72%" }}>
          <div className="days">
            <div className="problems">
              <div
                className="problems-solved-container"
                onClick={() =>
                  window.open("https://leetcode.com/u/bhanutejamakkineni/")
                }
              >
                <div className="problems-solved-number">
                  <div className="problems-solved-number-container">
                    <div className="solved-number">
                      <span className="number">{values.total_solved}</span>
                      <p>/ {values.leetcode_total}</p>
                    </div>
                    <div className="solved-tick-container">
                      <div className="solved-tick">
                        <img src={tick} alt="" />
                        <p>Solved</p>
                      </div>
                    </div>
                  </div>  
                </div>
                <div className="problems-solved-level">
                  <div className="problem-solved-easy">
                    <div className="problem-solved-easy-header">Easy</div>
                    <div className="problem-solved-easy-count">
                      {values.easy_solved}/{values.easy_total}
                    </div>
                  </div>
                  <div className="problem-solved-easy">
                    <div className="problem-solved-medium-header">Medium</div>
                    <div className="problem-solved-medium-count">
                      {values.medium_solved}/{values.medium_total}
                    </div>
                  </div>
                  <div className="problem-solved-easy">
                    <div className="problem-solved-hard-header">Hard</div>
                    <div className="problem-solved-hard-count">
                      {values.hard_solved}/{values.hard_total}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="badges-container"
                onClick={() =>
                  window.open("https://leetcode.com/u/bhanutejamakkineni/")
                }
              >
                <p>Badges</p>
                <div className="badges-images">
                  <img src={Badge100} alt="" />
                  <img src={Julybadge} alt="" />
                  <img src={Septbadge} alt="" />
                </div>
              </div>
            </div>
            <div
              className="total-days"
              onClick={() =>
                window.open("https://leetcode.com/u/bhanutejamakkineni/")
              }
            >
              <div className="total-days-streak">
                <div className="total-active-days">
                  Total active days: <p>{values.active_days}</p>
                </div>
                <div className="max-streak">
                  Max streak: <p>{values.max_streak}</p>
                </div>
              </div>
              <div className="total-days-image">
                <img src={days} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coding;
