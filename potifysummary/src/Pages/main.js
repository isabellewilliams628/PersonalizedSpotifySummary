import React from 'react';
import './main.css';
import { gsap } from "gsap";

function main() {



    return (
      <div className="main">

        <section className="one">
            <div className="intro">Time to see your top songs and artists of the month. Scroll to begin!</div>
        </section>
        <section className="two">
          <div className="TopArtists">
              <div className="head">Your Top Artists of The Month</div>
              <div className="artistList">
                <div className="artist"></div>
                <div className="artist"></div>
                <div className="artist"></div>
                <div className="artist"></div>
              </div>
          </div>
        </section>
        <section className="three">
          <div className="TopSongs">
              <div className="head">Your Top Songs of The Month</div>
              <div className="songList">
                <div className="song"></div>
                <div className="song"></div>
                <div className="song"></div>
                <div className="song"></div>
              </div>
          </div>
        </section>
      </div>
      
    );
  }
  
  export default main;