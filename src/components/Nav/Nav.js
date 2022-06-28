import classes from "./Nav.module.css";
import { useSelector } from "react-redux";
import Logo from "../ui/Logo";
import NavItem from "./NavItem/NavItem";
import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../../assets/search.svg";
import User from "../../assets/userIcon.svg";
import signout from "../../assets/signout.svg";
import CartLink from "../CartLink/CartLink";

function Nav() {
  const isAuthenticated = useSelector(store => store.auth.idToken !== null);

  return (
    <div className={classes.Nav}>
      <ul>
        <NavItem url="/shop">Shop</NavItem>
        <NavItem url="/specialdays">Special days</NavItem>
        <NavItem url="/location">Location</NavItem>
      </ul>
      <NavLink to="/" className={classes.logo}><Logo /></NavLink>
      <ul>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/contacts">Contacts</NavItem>
        <NavLink to="/search" className={classes.icons}><img src={Search} className={classes.searchIcon} alt="Search" /></NavLink>
        {!isAuthenticated ?
          <NavLink to="/auth" className={classes.icons}>
            <img src={User} className={classes.userIcon} alt="Account" />
          </NavLink>
        : null}
        {isAuthenticated ? 
          <NavLink to="/signout" className={classes.icons}>
            <img src={signout} className={classes.userIcon} alt="Account" />
          </NavLink> 
        : null}
        <NavLink to="/cart" className={classes.icons}><CartLink /></NavLink>
      </ul>
    </div>
  );
}

export default Nav;