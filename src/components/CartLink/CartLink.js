import { useSelector } from "react-redux";
import Cart from "../../assets/cartIcon.svg";
import classes from "./CartLink.module.css";
import React from "react";

export default function CartLink() {
  const number = useSelector(store => {
    return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
  });

  return (
    <div className={classes.CartLink}>
      <img src={Cart} width="15px" alt="Cart" className={classes.cartIcon} />
      <span className={classes.number}>{number}</span> 
    </div>
  );
}