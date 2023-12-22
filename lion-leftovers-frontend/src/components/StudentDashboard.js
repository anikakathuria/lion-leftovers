import React from 'react';
import axios from 'axios';
import Logout from "./logout";
import './Dashboard.css'; // Import the CSS file for consistent styling
import LionLeftoversLogo from './images/Lion_leftovers_home.png'; // Import the logo

const StudentDashboard = ({ userData }) => {

  const viewFoodOptions = async () => {
    try {
      const response = await axios.get('https://ymy2o0jd10.execute-api.us-east-1.amazonaws.com/dev/view_inventory');
      console.log(response.data);
      // Handle your response data here
    } catch (error) {
      console.error('There was an error!', error);
    }
  };


  return (
    <div className="dashboard-container">
      <img src={LionLeftoversLogo} alt="Lion Leftovers Logo" className="logo" />
      <h1>Welcome to Lion Leftovers, {userData?.name}</h1>
      <button className="dashboard-button" onClick={viewFoodOptions}>View Food Options</button>
      <button className="dashboard-button" onClick={() => console.log("Make an Order")}>Make an Order</button>
      <button className="dashboard-button" onClick={() => console.log("Write a Review")}>Write a Review</button>
      <Logout />
    </div>
  );
};

export default StudentDashboard;
