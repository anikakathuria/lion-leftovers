import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import './UnifiedLogin.css';
import LionLeftoversLogo from './images/Lion_leftovers_home.png'; 

const clientId = "826830747209-gqeu06rb29db7bu4ki1a5733nek60m9s.apps.googleusercontent.com";

const UnifiedLogin = ({ userRole, setUserData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    function start() {
      gapi.client.init({ clientId, scope: "profile email" }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
          updateUserData();
        } else {
          attachSignIn(document.getElementById('googleSignInButton'));
        }
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const updateUserData = () => {
    const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    setUserData({
      name: profile.getName(),
      email: profile.getEmail(),
    });
    handleLoginSuccess();
  };

  const handleLoginSuccess = () => {
    navigate(`/${userRole}-dashboard`);
  };

  const attachSignIn = (element) => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.attachClickHandler(element, {}, (googleUser) => {
      updateUserData();
    }, (error) => {
      console.log(JSON.stringify(error, undefined, 2));
    });
  };

  return (
    <div className="unified-login-container">
      <img src={LionLeftoversLogo} alt="Lion Leftovers Logo" className="logo" />
      <h1 className="login-header">Login as {userRole}</h1>
      <div id="googleSignInButton" className="login-button">Sign in with Google</div>
    </div>
  );
};

export default UnifiedLogin;
