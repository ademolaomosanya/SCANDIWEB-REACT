import React from "react";
import './Header.css'
import Cart from "../Svg/Cart"
import Symbol from "../Svg/Symbol"

export default function Header() {
    return (
        <div className="nav">
            <h1>SCANDIWEB</h1>

            <div className="nav_link">
                <p>ALL</p>
                <p>CLOTHES</p>
                <p>TECH</p>
            </div>

            <div className="sign">
                <Symbol />
                <Cart className="cart"/>
            </div>
        </div>
    );
}
