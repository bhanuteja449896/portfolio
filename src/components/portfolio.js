import React from 'react'
import admin from './assests/ad1/admin.png'
import home from './assests/ad1/home.png'
import login from './assests/ad1/login.png'
import notes from './assests/ad1/notes.png'
import timetable from './assests/ad1/timetable.png'

import "./css/portfolio.css"

const portfolio = () => {
  return (
    <div className="portfolio-main">
        <div className="portfolio-header">
            <div className="portfolio-head">Portfolio</div>
        </div>
        <div className="recent-projects-header">
            <div className="recent-projects">
                Some of my most recent projects
            </div>
            <div className="recent-projects-body">
                <div className="ad1">
                  <div className="ad1-header">
                    Class Archive
                  </div>
                  <div className="ad1-images">
                    <img src={home} alt="" />
                    <img src={notes} alt="" />
                    <img src={login} alt="" />
                    <img src={admin} alt="" />
                    <img src={timetable} alt="" />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default portfolio;