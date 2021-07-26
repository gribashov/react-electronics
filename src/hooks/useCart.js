import React from "react";
import {AppContext} from "../App";

export const useCart = () => {
  const {cartProducts, setCartProducts} = React.useContext(AppContext);
  const totalPrice = cartProducts.reduce((acc, obj) => acc + obj.price, 0);

  return {cartProducts, setCartProducts, totalPrice};
};
