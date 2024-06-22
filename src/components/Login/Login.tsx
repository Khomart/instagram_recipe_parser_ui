// src/components/Login/Login.tsx
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const clientId = '551565106982-2e6ariqdpbg3gonrpc334hq15jiep200.apps.googleusercontent.com';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      console.log(response);
      const { credential } = response;
      localStorage.setItem('google_token', credential);
      navigate('/landing');
    }
  };

  const handleLoginFailure = () => {
    console.error('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h2>Login with Google</h2>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
