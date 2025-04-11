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

const AdminDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div>
      <Sidebar userType="admin" className={styles.sidebar} />
      </div>
      <div className={styles.mainContent}>
        <Routes>
          <Route path="/admin/announcements" element={<Announcements />} />
          <Route path="/admin/discussion" element={<Discussion />} />
          <Route path="/admin/schedule" element={<Schedule />} />
          <Route path="/admin/clubs" element={<Clubs />} />
          <Route path="/admin/jobs" element={<Jobs />} />
          <Route path="/admin/alumni-stories" element={<Alumni />} />
          <Route path="/" element={
            <div className={styles.welcomeMessage}>
              <h2>Welcome to the Admin Control Panel</h2>
              <p>You have <strong>full system administration</strong> privileges:</p>
              <ul>
                <li><strong>Announcements:</strong> Create, edit, and manage all institutional announcements.</li>
                <li><strong>Discussion Forum:</strong> Moderate discussions, manage posts, and oversee all forum activities.</li>
                <li><strong>Schedule:</strong> Create and publish institutional schedules and events.</li>
                <li><strong>Clubs:</strong> Approve new clubs, manage existing clubs, and oversee all club activities.</li>
                <li><strong>Alumni Stories:</strong> Review and publish alumni success stories and career paths.</li>
                <li><strong>Jobs:</strong> Manage job postings, verify employers, and oversee the job board.</li>
                
              
                
              </ul>
              
              <div className={styles.adminNote}>
                <h3>Administrative Responsibilities:</h3>
                <ol>
                  <li>Ensure all content complies with institutional policies</li>
                  <li>Maintain system security and user data privacy</li>
                  <li>Respond to user reports and support requests</li>
                  <li>Keep all institutional information up-to-date</li>
                </ol>
                <p>Use your administrative privileges responsibly to maintain a safe and productive platform.</p>
              </div>
            </div>
          } />
        </Routes>
        
      </div>
    </div>
  );
};

export default AdminDashboard;