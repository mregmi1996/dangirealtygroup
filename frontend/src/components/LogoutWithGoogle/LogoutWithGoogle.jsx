import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch, connect } from 'react-redux';
import { actionTypes } from '../../reducers/user';
import './LogoutWithGoogle.scss';

const clientId = '777732021087-1bcfe0dtp7uq4f1g0mon43n4g7m8qor5.apps.googleusercontent.com';

function LogoutWithGoogle() {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch({
        type: actionTypes.SET_LOGOUT,
    });
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };
  const onSuccess = () => {
    dispatch({
        type: actionTypes.SET_LOGOUT,
    });
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={renderProps=> (
          <button onClick={logOut} className="logout-button">Logout</button>
        )}
      ></GoogleLogout>
    </div>
  );
}

export default LogoutWithGoogle;
