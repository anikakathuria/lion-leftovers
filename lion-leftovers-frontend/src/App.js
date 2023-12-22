import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import UnifiedLogin from './components/UnifiedLogin';
import StudentDashboard from './components/StudentDashboard';
import WorkerDashboard from './components/WorkerDashboard';

function App() {
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState({}); // State for user data

  const handleRoleSelect = (role) => {
    setUserRole(role);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage onRoleSelect={handleRoleSelect} />} />
          <Route path="/login" element={<UnifiedLogin userRole={userRole} setUserData={setUserData} />} />
          <Route path="/student-dashboard" element={<StudentDashboard userData={userData} />} />
          <Route path="/worker-dashboard" element={<WorkerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
