import React from 'react';
import Leetcode from './assests/leetcode.png';
import Dp from './assests/dp.jpg';
import location from './assests/location_icon.png';
import college from './assests/college.png';
import tag from './assests/tag.png';
import badge100 from './assests/badge100.png'
import Julybadge from './assests/july_badge.png';
import Septbadge from './assests/sept_badge.png';

import './css/coding.css'

function Coding(){
    return(
        <div className="leet-main">
            <div className="header-container">
                <div className="header">
                    <img src={Leetcode} alt="" />
                    <div>LEETCODE</div>
                </div>
            </div>
            <div className="leetcode-body">
                <div style={{width : '25%' }} >
                    <div className="user-container">
                        <div className="user-details">
                            <div className="Image">
                                <img src={Dp} alt="" />
                            </div>
                            <div className="Name-container">
                                <div className="name">Name : Bhanu Teja</div>
                                <div className="rank">Rank : 105000</div>
                            </div>
                        </div>
                        <div className="location-container">
                            <div className="location">
                                <img src={location} alt="" />
                                <div className="location-address">
                                    India
                                </div>
                            </div>
                            <div className="location">
                                <img src={college} alt="" />
                                <div className="location-address">
                                    Malla Reddy College of Engineering & Technology
                                </div>
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
                            <div className="language-header">
                                Languages
                            </div>
                            <div className="languages">
                                <div className="language-java">
                                    <div className="language-java-name">
                                        Python3
                                    </div>
                                    <div className="language-problem-count">
                                        <p>519</p> problems sovled
                                    </div>
                                </div>
                                <div className="language-java">
                                    <div className="language-java-name">
                                        Java
                                    </div>
                                    <div className="language-problem-count">
                                        <p>68</p> problems sovled
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="skills">
                            <div className="advanced">

                            </div>
                        </div> */}
                    </div>
                </div>
                <div style={{width : '75%'  }} >
                <div className="days">
                    <div className="problems-container-card">
                        <div className="problems-solved">
                            <div className="solved">
                                <div className="solved-count">
                                    <div className="solved-count-number">
                                        521
                                    </div>
                                    <p>/3322</p>
                                </div>
                                <div className="solved-tick"></div>
                            </div>
                            <div className="level">
                                <div className="easy">
                                    <div className="level-number">
                                    </div>
                                </div>
                                <div className="medium">
                                    <div className="level-number">
                                    </div>
                                </div>
                                <div className="hard">
                                    <div className="level-number">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="badges-container-card">
                            <div className="badges">
                                <div className="badge-header"></div>
                                <div className="badges-images">
                                    <img src={badge100} alt="" />
                                    <img src={Julybadge} alt="" />
                                    <img src={Septbadge} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="submissions">

                    </div>
                </div>
                </div>


            </div>

        </div>
    );
}

export default Coding ;