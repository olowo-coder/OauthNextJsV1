import React from 'react';
import GoogleLogin from 'react-google-login';

function about() {
    const responseGoogle = (response) => {
        console.log(response);
      }
  return (
    <div>
        <GoogleLogin
    clientId="320065133150-ulo7qmphilkj7n6urbi4kbf1fpr3ol9b.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  )
}

export default about