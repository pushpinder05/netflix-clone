import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';

function App() {

  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
      } else {
        // Logged out
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <BrowserRouter>  
        <Routes> 
          {!user ? (
            <Route path="/" element={<LoginScreen />} />
          ) : (
            <Route excat path="/" element={<HomeScreen />} />  
          )}                           
        </Routes> 
      </BrowserRouter>   
    </div>
  );
}

export default App;