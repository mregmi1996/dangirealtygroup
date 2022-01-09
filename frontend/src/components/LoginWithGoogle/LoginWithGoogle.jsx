import React, { useState, useEffect } from 'react';
import { actionTypes } from '../../reducers/user';
import { useDispatch, connect } from 'react-redux';
import configuration from '../../config';
import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '777732021087-1bcfe0dtp7uq4f1g0mon43n4g7m8qor5.apps.googleusercontent.com';

function LoginWithGoogle(props) {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj, JSON.stringify(props.userCredentials));
    if(!props.userCredentials.loggedIn) {
      checkIfEmailExistsAndRegister(res.profileObj);
    }
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const checkIfEmailExistsAndRegister = (userProfile) => {
    // check if the email exists in the DB
    fetch(`${configuration.URL}/validate/${userProfile.email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      }).then((response) =>
          response.json()
      ).then((data) => {
          console.log(data);
          if (data.message === "success") {
            loginUser(userProfile);
            alert(`Welcome Back!`);
          } else {
            signUpUser(userProfile);
          }
      }).catch((err) => {
          // setvariant('danger');
          alert('Oops! Something went wrong x(');
          // alertUser();
      })
  }

  const signUpUser = (userProfile) => {
    let formData = {
        email: userProfile.email,
        password: userProfile.googleId,
        firstName: userProfile.givenName,
        lastName: userProfile.familyName,
    }
    // call user post
    fetch(`${configuration.URL}/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then((response) => response.json())
        .then((data) => {
            dispatch({
                type: actionTypes.SET_LOGIN,
                email: data.data.email,
                sessionToken: data.data.token,
                userData: data.data
            });
            props.changeDisplaySignUpStyle("close");
        }).catch((err) => {
            console.log(err);
            alert("Oops! Something went wrong!");
            // setvariant('danger');
            // alertUser();
        })
  }

  const loginUser = (userProfile) => {
    let formData = {
        email: userProfile.email,
        password: userProfile.googleId,
        firstName: userProfile.givenName,
        lastName: userProfile.familyName,
    }
    // call user post
    fetch(`${configuration.URL}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then((response) => response.json())
        .then((data) => {
            dispatch({
                type: actionTypes.SET_LOGIN,
                email: data.data.email,
                sessionToken: data.data.token,
                userData: data.data
            });
            props.changeDisplaySignUpStyle("close");
        }).catch((err) => {
            console.log(err);
            alert("Oops! Something went wrong!");
            // setvariant('danger');
            // alertUser();
        })
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={false}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { userReducer} = state
  return userReducer
}

export default connect(mapStateToProps)(LoginWithGoogle)