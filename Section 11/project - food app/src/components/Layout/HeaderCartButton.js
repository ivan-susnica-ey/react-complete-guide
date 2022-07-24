import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const [btnAnimation, setBtnAnimation] = useState(false);

  const numberOfItems = ctx.items.reduce((a, e) => {
    return a + e.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ""}`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnAnimation(true);

    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    // we need cleanup function in cases we add the items rapidly

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
