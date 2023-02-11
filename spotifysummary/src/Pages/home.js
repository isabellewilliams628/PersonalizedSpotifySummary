import React from 'react';

import './home.css';
import background from '../Assets/gradient1.jpg';
import star from "../Assets/stars.png";
import {Link} from "react-router-dom";
import axios from 'axios';
import {Buffer} from 'buffer'


function home() {

  function authSpotify() {
    var client_id = "d6802b1fce6e44a78354fc3cd886d007";
    var client_secret = "eca120030997467bb30ed871efb5a057";

    axios.post('https://accounts.spotify.com/api/token', {grant_type: "client_credentials"}, {
      headers: {
        Authorization: "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64"),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => {console.log(response.data.access_token)})

  }
  
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
           
            <button className="loginButton" onClick={() => authSpotify()}>Login to Spotify</button>
            <Link to="/summary" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="m" >Main</div>
            </Link>
        </div>

      </div>
    );
  }
  
  export default home;