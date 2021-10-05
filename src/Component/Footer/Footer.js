import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
           <div className='row container'>
               <div className="col-md-4">
                    <small>Contact Us</small>
               </div>
                <div className="col-md-4">
                     <small>Subscribe</small>
                     <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
                </div>
                <div className="col-md-4">
                <small>Privacy Policy</small>
                </div>
                    
           </div>
        </div>
    );
};

export default Footer;