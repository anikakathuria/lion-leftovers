import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import lionLeftoversHomeImage from './images/Lion_leftovers_home.png';
import './WelcomePage.css'; 

const WelcomePage = ({ onRoleSelect }) => {
  const navigate = useNavigate(); 

  const handleButtonClick = (role) => {
    onRoleSelect(role);
    navigate('/login');
  };

  return (
    <div className="welcome-container">
      <img src={lionLeftoversHomeImage} alt="Lion Leftovers Home" className="home-image" />
      <h1 className="welcome-title">Welcome to Lion Leftovers</h1>
      <button className="welcome-button" onClick={() => handleButtonClick('student')}>Student</button>
      <button className="welcome-button" onClick={() => handleButtonClick('worker')}>Dining Hall Worker</button>
    </div>
  );
};

export default WelcomePage;
