import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Cart from "../Svg/Cart"
import Symbol from "../Svg/Symbol"

export default function Header() {
    const [activeLink, setActiveLink] = useState('');
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
    return (
        <div className="nav">
            <h1>SCANDIWEB</h1>

            <div className="nav_link">
                <Link className={activeLink === 'link1' ? 'active' : 'link'}
                    onClick={() => handleLinkClick('link1') } to="/All">All</Link>

                <Link className={activeLink === 'link2' ? 'active' : 'link'}
                    onClick={() => handleLinkClick('link2')} to="/clothes">Clothes</Link>

                <Link className={activeLink === 'link3' ? 'active' : 'link'}
                    onClick={() => handleLinkClick('link3')} to="/tech">TECH</Link>
            </div>

            <div className="sign">
                <Symbol />
                <Cart className="cart" />
            </div>
        </div>
    );
}
