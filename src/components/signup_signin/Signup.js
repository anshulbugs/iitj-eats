import React from "react";
import "./signup.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Signup = () => {
  return (
    <>
      <div className="signupcontainer">
        <div className="signupheading">
          <h2>Welcome to</h2>
          <h2 className="signupiitjeats">IITJEATS</h2>
          <span> All your all favourite eating spots under one roof.</span>
          <span className="signupiitjeats"> Order Now</span>
        </div>

        <div className="signupbottom">
          <div className="signinwithtext">
            <span>Signin With</span>
          </div>
          <div className='signinbutton1'>
              <GoogleOAuthProvider   clientId="503531894137-qn0rmeumsi509sqm848oaddd5ikgq5l6.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  useOneTap
                />
              </GoogleOAuthProvider>
              ;
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
