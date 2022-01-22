import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import HomeScreen from './HomeScreen';
import "./ProfileScreen.css";

function ProfileScreen() {

    const user = useSelector(selectUser);


  return (
    <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
            <h4>- Click on NETFLIX Logo to go to watch Movies/Series</h4>
            <h1>Edit profile</h1>
            <div className="profileScreen__info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreens__plans">
                        <h3>Plans</h3>
                        <p>Netflix Premium</p>
                        <small>expiring in 17 days</small>
                        <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProfileScreen;
