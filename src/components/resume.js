import React from 'react'
import Resume from './assests/bhanutejamakkineni_resume.pdf'

import "./css/resume.css"

const resume = () => {
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'resume.pdf';
        link.click();
      };
  return (
    <div className="resume-body">
        <div className="resume-header-container">
            <div className="resume-header" onClick={handleResumeDownload } >
                Resume
            </div>
        </div>
        <div className="resume-summary-header">
            <div className="resume-summary">A Summary of My Resume</div>
        </div>
        <div className="education-container">
            <div className="education">
                <div className="education-header">
                    My Education
                </div>
                <div className="education-body">
                    <div className="btech">
                        <div className="btech-header">Bachelor of Technology</div>
                        <div className="btech-university">JNTUH / 2022-2026</div>
                        <div className="btech-summary">Currently pursuing Bachelor of Technology in Malla Reddy College of Engineering and Technology affiliated to JNTUH from 2022 to 2026</div>
                    </div>
                </div>
            </div>
            <div className="experience">
                <div className="experience-header">My Projects</div>
                <div className="experience-data">
                    <div className="class-archive">
                        <div className="class-archive-header" id="resume-summary">
                            Class Archive
                        </div>
                        <div className="class-archive-summary" id="resume-summary">
                        A web-based platform designed to store and manage lecture materials for educational institutions. The platform allows students to easily access and download various types of files (PDFs, images, presentations, etc.), organized by subject for convenient browsing. Developed using React.js for the frontend, Node.js with Express.js for the backend, and Firebase for hosting. The project provides a centralized repository for students to access important resources while enabling admin functionality for managing the content.
                        </div>
                    </div>
                    <div className="gatepass">
                        <div className="gatepass-header" id="resume-summary">
                            Gatepass
                        </div>
                        <div className="gatepass-summary" id="resume-summary">
                        A college security management system designed to streamline the student gate pass approval process. Students request permission from their department Head of Department (HOD) for leave, and the HOD verifies and approves the request. Upon approval, the system updates the database, granting authorized students the ability to exit the campus. Security personnel at the gate access real-time data to verify and confirm which students have permission to leave. The project improves campus security and simplifies the gate pass process by ensuring efficient communication between students, HOD, and security staff.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="download-resume-container">
            <div className="download-resume" onClick={handleResumeDownload} >Download Resume</div>
        </div>
    </div>
  )
}

export default resume;