import React, {useState, useEffect} from 'react';

import './home.css';
import background from '../Assets/gradient1.jpg';
import star from "../Assets/stars.png";
import {Link} from "react-router-dom";
import axios from 'axios';
import {Buffer} from 'buffer'


function Home() {

  let loginDirect = 'https://accounts.spotify.com/authorize?client_id=d6802b1fce6e44a78354fc3cd886d007&redirect_uri=https://personalizedspotifysummary.netlify.app/summary&response_type=token&scope=user-top-read%20user-read-private%20user-library-read'
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
           
            <button className="loginButton" ><a style={{ textDecoration: 'none', color: 'inherit' }} href={loginDirect}>Login to Spotify</a></button>
            <Link to="/summary" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="m" >Main</div>
            </Link>
        </div>

      </div>
    );
  }
  
  export default Home;