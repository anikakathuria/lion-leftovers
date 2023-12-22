import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import './LogoutButton.css'; // Import the CSS file

const clientId = "826830747209-gqeu06rb29db7bu4ki1a5733nek60m9s.apps.googleusercontent.com";

function Logout() {
  const navigate = useNavigate();

  const onSuccess = () => {
    console.log("Log out successful!");
    navigate('/');
  }

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
        className="logout-button" // Apply the CSS class
      />
    </div>
  );
}

export default Logout;
