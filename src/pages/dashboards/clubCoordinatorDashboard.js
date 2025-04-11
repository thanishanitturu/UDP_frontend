// StudentDashboard.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from '../../components/sidebar'; // Your sidebar component
import Announcements from "../../components/sideComponents/Announcements"; // Your announcements component
import Discussion from "../../components/sideComponents/Discussions"; // Example discussion component
import Schedule from "../../components/sideComponents/Schedule"; // Example schedule component
import Clubs from "../../components/sideComponents/Clubs"; // Example clubs component
import Jobs from "../../components/sideComponents/Jobs"; // Example jobs component
import Alumni from "../../components/sideComponents/Alumni"; // Example alumni stories component
import styles from '../../assets/studentDashboard.module.css'; // Import the CSS module

const clubCoordinatorDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div>
      <Sidebar userType="clubCoordinator" className={styles.sidebar} />
      </div>
      <div className={styles.mainContent}>
        <Routes>
          <Route path="/clubCoordinator/announcements" element={<Announcements />} />
          <Route path="/clubCoordinator/discussion" element={<Discussion />} />
          <Route path="/clubCoordinator/schedule" element={<Schedule />} />
          <Route path="/clubCoordinator/clubs" element={<Clubs />} />
          <Route path="/clubCoordinator/jobs" element={<Jobs />} />
          <Route path="/clubCoordinator/alumni-stories" element={<Alumni />} />
          <Route path="/" element={<h2 className={styles.welcomeMessage}>
            
            <div className={styles.welcomeMessage}>
              <h2>Welcome to the Student Dashboard!</h2>
              <p>Here’s what you can do:</p>
              <ul>
                <li><strong>Announcements:</strong> View the latest announcements from your institution.</li>
                <li><strong>Discussion Forum:</strong> Create new threads, react to others' threads, and like or dislike posts.</li>
                <li><strong>Schedule:</strong> Download PDFs of schedules posted by the admin.</li>
                <li><strong>Clubs:</strong> Explore various clubs and join the ones that interest you and create the one</li>
                <li><strong>Alumni Stories:</strong> Read about the experiences and career paths of alumni.</li>
                <li><strong>Jobs:</strong> View available job postings and apply for positions that match your skills and interests.</li>
              </ul>
            </div>
            
            </h2>} />
        </Routes>
      </div>
    </div>
  );
};

export default clubCoordinatorDashboard;