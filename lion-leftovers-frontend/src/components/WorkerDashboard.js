import React from 'react';
import Logout from "./logout";
import './Dashboard.css'; 
import axios from 'axios';
import lionLeftoversHomeImage from './images/Lion_leftovers_home.png';
const WorkerDashboard = ({ userData }) => {

  const getOrders = async () => {
    try {
      const response = await axios.get('https://ymy2o0jd10.execute-api.us-east-1.amazonaws.com/dev/get_orders');
      console.log(response.data);
      // Handle your response data here
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const view_inventory = async () => {
    try {
      const response = await axios.get('https://ymy2o0jd10.execute-api.us-east-1.amazonaws.com/dev/view_inventory');
      console.log(response.data);
      // Handle your response data here
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const getReviews = async () => {
    try {
      const response = await axios.get('https://ymy2o0jd10.execute-api.us-east-1.amazonaws.com/dev/student_reviews');
      console.log(response.data);
      // Handle your response data here
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  return (
    <div className="dashboard-container">
      <img src={lionLeftoversHomeImage} alt="Lion Leftovers Logo" className="logo" />
      <h1>Welcome to the Worker Dashboard, {userData?.name}</h1>
      <button className="dashboard-button" onClick={view_inventory}>Manage Inventory</button>
      <button className="dashboard-button" onClick={getOrders}>Manage Orders</button>
      <button className="dashboard-button" onClick={getReviews}>Manage Reviews</button>
      <Logout />
    </div>
  );
};

export default WorkerDashboard;
