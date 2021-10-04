import React from 'react';
import '../Header/Header.css'
import logo from"../../image/images/learn English nav.jpg"
const Header = () => {
    return (
        <div className="header">
           <img  src={logo} alt="" />
             
        </div>
    );
};

export default Header;