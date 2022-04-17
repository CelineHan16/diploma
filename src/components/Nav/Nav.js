import "./Nav.css";
import Logo from "../ui/Logo";
import NavItem from "./NavItem/NavItem";
import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../../assets/search.svg";
import Cart from "../../assets/cartIcon.svg";
import User from "../../assets/userIcon.svg";

function Nav() {
  return (
    <nav className="Nav">
      <ul>  
        <NavItem url="/shop">Shop</NavItem>
        <NavItem url="/specialdays">Special days</NavItem>
        <NavItem url="/delivery">Delivery</NavItem>
        <NavItem url="/location">Location</NavItem>
      </ul>
      <NavLink to="/" className="Logo"><Logo /></NavLink>
      <ul>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/account">Contacts</NavItem>
        <NavLink to="/search" className="icons"><img src={Search} className="searchIcon" alt="Search" /></NavLink>
        <NavLink to="/user" className="icons"><img src={User} className="userIcon" alt="Account" /></NavLink>
        <NavLink to="/cart" className="icons"><img src={Cart} className="cartIcon" alt="Cart" /></NavLink>
      </ul>
    </nav>
  );
  
}

export default Nav;