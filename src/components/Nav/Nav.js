import "./Nav.css";
import Logo from "../ui/Logo";
import NavItem from "./NavItem/NavItem";
import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../../assets/searchIcon.svg";

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
        <NavItem url="/unveil">Unveil</NavItem>
        <NavItem url="/account">Contacts</NavItem>
        <NavLink to="/search"><img src={Search} className="searchIcon" alt="Search" /></NavLink>
      </ul>
    </nav>
  );
  
}

export default Nav;