import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [checkoutVisible, setCheckoutVisible] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const addHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const removeHandler = (id) => {
    ctx.removeItem(id);
  };

  const checkoutHandler = () => {
    setCheckoutVisible(true);
  };

  const submitDataHandler = async (formData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-2ef2f-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          order: formData,
          orderedItems: ctx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    ctx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          name={item.name}
          amount={item.amount}
          key={item.id}
          price={item.price}
          onRemove={removeHandler.bind(null, item.id)}
          onAdd={addHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  const cartModalContent = (
    <>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {ctx.totalAmount.toFixed(2)}</span>
      </div>

      {checkoutVisible && (
        <Checkout
          submitDataHandler={submitDataHandler}
          hideCartHandler={props.hideCartHandler}
        />
      )}
      {!checkoutVisible && (
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.hideCartHandler}
          >
            Close
          </button>
          {ctx.items.length > 0 && (
            <button className={classes.button} onClick={checkoutHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data ...</p>;

  const didSubmitModalContent = (
    <p>
      Successfully sent the order! You will be contacted once the order is
      prepared.
    </p>
  );

  return (
    <Modal onClick={props.hideCartHandler}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
