import React from 'react'
import './style.css';

function FromValid() {
    
  function emailValid(event) {
    const email = document.getElementById("email").value
      
    const validate = /\S+@\S+\.\S+/; 

    if (!validate.test(email) || !email) {

          const err = document.getElementById("err");
          const line = document.getElementById("email");
          err.classList.add("errorclose");
          line.classList.add("redline")
          event.preventDefault();
          
      }else{

    }

  } 
    return (
        <div>
            
      <div class="form">
        <form action="GET">
        <div>
          <input
           id="email"
            placeholder="Your email address..." 
            type="text" 
  
            />
            
          <p id="err" class="error">Please provide a valid email address</p>
           
            </div>

          <button onClick={emailValid} >Notify Me</button>
        </form>
      </div>
 
        </div>


    )
} 
export default FromValid
