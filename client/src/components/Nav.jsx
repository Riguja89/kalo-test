import React from "react";
import { Link } from "react-router-dom";
import puff from "../images/puff.svg"
import nap from "../images/nap.svg"
import cart from "../images/cart.svg"
import rain from "../images/rain.svg"
import pufi from "../images/pufi.svg"
const Nav=()=>{

    return(
        <div className="navContainer">
            <div className="titleContainer">
            <img src={pufi} className="logo" alt="" />
            </div>
            <nav className="menu">
            <ul>
                <li>
                <a href="#Pufi PUFF"><img src={puff} className="icono" alt="" /><br />PUFI PUFF</a>
                </li>
                <li>
                <a href="#Pufi RAIN"><img src={rain} className="icono" alt="" /><br />PUFI RAIN</a>
                </li>
                <li>
                <a href="#Pufi CART"><img src={cart} className="icono" alt="" /><br />PUFI CART</a>
                </li>
                <li className="final">
                <a href="#Pufi NAP"><img src={nap} className="icono" alt="" /><br /> PUFI NAP </a>
                </li>
            </ul>
            </nav>
            <div className="submenu">
                <nav>
                <ul className="sublist">
                <li>
                <div className="dropdown">
                    <a className="dropbtn">MI CUENTA ▾</a>
                    <div className="dropdown-content">
                        <a href=" "  >MI PERFIL</a>
                        <a href=" "  >LOG OUT</a>
           
                    </div>
                </div>
                </li>
                <li className="final">
                    <Link to="/miscompras">
                        MI COMPRA
                    </Link>
                
                </li>
            </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav