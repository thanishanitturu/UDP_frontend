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

const FacultyDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div>
      <Sidebar userType="faculty" className={styles.sidebar} />
      </div>
      <div className={styles.mainContent}>
        <Routes>
          <Route path="/faculty/announcements" element={<Announcements />} />
          <Route path="/faculty/discussion" element={<Discussion />} />
          <Route path="/faculty/schedule" element={<Schedule />} />
          <Route path="/faculty/clubs" element={<Clubs />} />
          <Route path="/faculty/jobs" element={<Jobs />} />
          <Route path="/faculty/alumni-stories" element={<Alumni />} />
          <Route path="/" element={
            <div className={styles.welcomeMessage}>
              <h2>Welcome to the Faculty Portal</h2>
              <p>As faculty member, you have these privileges:</p>
              <ul>
                <li><strong>Announcements:</strong> Create and publish official announcements for your department or courses</li>
                <li><strong>Discussion Forum:</strong> Participate in discussions, react to posts, and moderate student conversations</li>
                <li><strong>Schedule:</strong> Download academic schedules, event calendars, and important dates</li>
                <li><strong>Clubs:</strong> View all student clubs and their activities (advisor privileges available for clubs you oversee)</li>
                <li><strong>Alumni Stories:</strong> Access alumni career profiles and success stories</li>
                <li><strong>Jobs:</strong> View career opportunities to share with students</li>
              </ul>
              
              <div className={styles.facultyNote}>
                <h3>Faculty Resources:</h3>
                <ol>
                  <li>Use announcements to communicate important information to students</li>
                  <li>Engage with students in discussions to provide academic guidance</li>
                  <li>Download schedules to stay updated with institutional events</li>
                  <li>Explore clubs to identify potential advising opportunities</li>
                </ol>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default FacultyDashboard;