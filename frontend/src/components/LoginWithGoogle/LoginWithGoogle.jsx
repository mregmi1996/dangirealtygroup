import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '777732021087-1bcfe0dtp7uq4f1g0mon43n4g7m8qor5.apps.googleusercontent.com';

function LoginWithGoogle() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginWithGoogle;