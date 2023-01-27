import React from 'react';

import './home.css';
import background from '../Assets/gradient1.jpg';
import star from "../Assets/stars.png";
import {Link} from "react-router-dom";

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
            <Link to="/summary" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="m" >Main</div>
            </Link>
        </div>

      </div>
    );
  }
  
  export default home;