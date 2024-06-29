import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
   <>
  
   <div className="nav">
    <ul>
        
           <li> <a href="/">home</a></li>
           <li><a href="/">About</a></li> 
           <li> <a href="/">Contact</a></li> 
           <li><a href="/">More</a></li> 
         
    </ul>
    
    <input type="text" placeholder="Search Facebook" id='search'/>
      <button type="submit" id='btn'><i className="fa fa-search"></i></button>
        
         
    
   </div>
   </>
  )
}

export default Navbar
