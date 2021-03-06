import React, { useRef } from 'react';
import { auth } from '../firebase';
import "./SignupScreen.css"

function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch(error => {
      alert(error.message);
    });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch(error => {
      alert(error.message);
    });
  };

  return (
  <div className="signupScreen">
     <form>
        <h1>Sign In</h1>
         <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} placeholder="Password" type="password" />
          <button type="submit" onClick={signIn}>Sign In</button>

          <h4><span className="signupScreen__gray">New to Netflix? </span>
              <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
          </h4>

        <div className="signupScreen__extra">
          <h6>Guest? use Email: elon@gmail.com Password: elon123</h6>
          <h6>To <strong>Register</strong> - Type your Email, Password and then click on Sign Up now.</h6>
        </div>
          
      </form> 
  </div>
  );
}

export default SignUpScreen;