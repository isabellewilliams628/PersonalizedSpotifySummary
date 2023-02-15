import React, {useEffect, useState} from 'react';
import './main.css';
import { gsap } from "gsap";
import axios from 'axios';

function Main() {

  const [token, setToken] = useState("")
  const [artists, setArtists] = useState([])
  const [songs, setSongs] = useState([])

  useEffect( () => {

    const hash = window.location.hash
    let token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

    //if (!token && hash){
    //  token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    //  window.location.hash = ""
    //  window.localStorage.setItem("token", token)
    //}
    setToken(token)
    getTopArtists(token)

  }, [])


  async function getTopArtists(givenToken){
    console.log(givenToken)
   let response = await axios.get("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${givenToken}`
    },
   })
   let topArtists = []
   for(let i = 0; i < 5; i++){
      topArtists.push(response.data.items[i].name)
   }

   setArtists([...topArtists])
  }
  

    return (
      <div className="main">

        <section className="one">
            <div className="intro">Time to see your top songs and artists of the month. Scroll to begin!</div>
        </section>
        <section className="two">
          <div className="TopArtists">
              <div className="head">Your Top Artists of The Month</div>
              <div className="artistList">
                {artists.map((artist, index) => {
                  return(
                    <div key={index} className="artist">{artist}</div>
                  )
                })

                }
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
  
  export default Main;