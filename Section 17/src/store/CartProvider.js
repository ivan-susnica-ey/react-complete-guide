import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //we could simply add an item - but we want to group them! items of the same meal
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //logika iznad uvek stoji, ALI pre nego sto cu da azuriram items hocemo da vidimo da li je item already deo cart-a

    const isItemInCart = state.items.findIndex((e) => e.id === action.item.id);
    const alreadyInCartItem = state.items.find((e, i) => i === isItemInCart);
    // const alreadyInCartItem = state.items[isItemInCart];

    let updatedItems;

    if (alreadyInCartItem) {
      const updatedItem = {
        ...alreadyInCartItem,
        amount: alreadyInCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items]; // creating new array and copying old objects, so we update this imutably, without editing the old array in memory
      updatedItems[isItemInCart] = updatedItem; // we override the item in array with updated item
    } else {
      //item is added for the first time;
      updatedItems = state.items.concat(action.item); // we're just adding the updated item
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const isItemInCart = state.items.findIndex((e) => e.id === action.id);
    const alreadyInCartItem = state.items.find((e, i) => i === isItemInCart);

    const updatedTotalAmount = state.totalAmount - alreadyInCartItem.price;

    let updatedItems;

    if (alreadyInCartItem.amount === 1) {
      updatedItems = state.items.filter((e) => e.id !== action.id);
    } else {
      const updatedItem = {
        ...alreadyInCartItem,
        amount: alreadyInCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[isItemInCart] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCart({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  }; // u prosloj vezbe value objekat je direktno isao kao argument

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
