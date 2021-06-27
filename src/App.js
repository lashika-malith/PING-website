import './App.css';
import photo from './images/illustration-dashboard.png';
import './style.css';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import React, {Component} from "react";
//Fmonitor1react\1st\my-app\images\illustration-dashboard.png

import FromValid from './FromValid';
 class App extends Component {
 render(){
  return (
 

    <div className="App">
      <div class="logo">
                <h1>PING<span class="stop">.</span></h1>
      </div>

      <div class="tittle">   
           <h1>We are launching <span>soon!</span></h1>
      </div>

      <div class="para">
        <p>Subscribe and get notified</p>
      </div>

      <div>
      <FromValid/>
      </div>

      <div class="err-msg">
      
      </div>
      <div class="photo">
        <img src={photo} alt="" />
      </div>


    <div class="contact">
        <a href="https://www.facebook.com/"><FaFacebookF class="social"/><facebook/></a>
        <a href="https://twitter.com/?lang=en"><AiOutlineTwitter  class="social"/></a>
        <a href="https://www.instagram.com/"><AiOutlineInstagram  class="social"/></a>

    </div>

    <p class="copyright">&copy; Copyright Ping. All rights reserved.</p>
 

    </div>
  );
    
  }}
export default App;
