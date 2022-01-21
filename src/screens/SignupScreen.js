import React from 'react';
import "./SignupScreen.css"

function SignUpScreen() {

  const register = (e) => {
    e.preventDefault();

  }

  const signIn = (e) => {
    e.preventDefault();
  }

  return (
  <div className="signupScreen">
     <form>
        <h1>Sign In</h1>
         <input type="email" placeholder="Email" />
          <input placeholder="Password" type="password" />
          <button type="submit" onClick={signIn}>Sign In</button>

          <h4 className="signupScreen__gray"><span>New to Netflix?</span>
              <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
          </h4>
      </form> 
  </div>
  );
}

export default SignUpScreen;
