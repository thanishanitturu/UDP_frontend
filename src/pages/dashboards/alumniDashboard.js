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

const AlumniDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div>
      <Sidebar userType="alumni" className={styles.sidebar} />
      </div>
      <div className={styles.mainContent}>
        <Routes>
          <Route path="/alumni/announcements" element={<Announcements />} />
          <Route path="/alumni/discussion" element={<Discussion />} />
          <Route path="/alumni/schedule" element={<Schedule />} />
          <Route path="/alumni/clubs" element={<Clubs />} />
          <Route path="/alumni/jobs" element={<Jobs />} />
          <Route path="/alumni/alumni-stories" element={<Alumni />} />
          <Route path="/" element={
            <div className={styles.welcomeMessage}>
              <h2>Welcome to the Alumni Network Portal</h2>
              <p>As a valued alumnus, you can:</p>
              <ul>
                <li><strong>Announcements:</strong> Stay updated with the latest news of the university</li>
                <li><strong>Discussion Forum:</strong> Create new threads, share experiences, and react to others' posts</li>
                <li><strong>Schedule:</strong> Download event schedules and important academic calendars</li>
                <li><strong>Clubs:</strong> Explore current student clubs and activities</li>
                <li><strong>Jobs:</strong> Post career opportunities for current students and fellow alumni</li>
              </ul>
              
              <div className={styles.alumniNote}>
                <h3>Your Alumni Benefits:</h3>
                <ol>
                  <li>Recruit talented graduates for your organization</li>
                  <li>Stay connected with your academic community</li>
                  <li>Access exclusive alumni events and resources</li>
                </ol>
                <p>We're thrilled to have you continue as part of our community!</p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default AlumniDashboard;