import React, {useEffect} from 'react';

import {useNavigate, useLocation} from 'react-router-dom';
import {useAuth} from '../auth';
import {Snow} from '../snow';


function Presentation() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  
  useEffect(function() {
    auth.tryLoginActiveSession(function() {
      navigate(from);
    });
  }, [navigate]);

  let from = location.state?.from?.pathname || '/';

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get('username');
    let password = formData.get('password');

    auth.signin(
      username,
      password,
      function() {
        navigate(from, {replace: true});
      },
      function(userSessionData) {
        auth.handleNewPassword(username, password, userSessionData, function() {
          navigate(from, {replace: true});
        });
      },
    );
  }

  return (
    <div>
        
    </div>
  );
}

export {Presentation};