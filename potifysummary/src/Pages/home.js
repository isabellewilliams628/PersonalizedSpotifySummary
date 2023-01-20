import React from 'react';
import './home.css';
import background from '../Assets/gradient1.jpg';
import star from "../Assets/stars.png";

function home() {
    return (
      <div className="home">
        <div className="mainContent">
            <div className="star1">
                <img src={star} ></img>
            </div>
            <div className="title">Your Spotify Summary</div>
            <div className="star2">
            <img src={star} ></img>
            </div>
           
            <button className="loginButton">Login to Spotify</button>
            
        </div>
      </div>
    );
  }
  
  export default home;