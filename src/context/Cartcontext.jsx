import { createContext, useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (data) => {
    const exist = cart.find((x) => x._id === data._id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === data._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...data, qty: 1 }]);
    }

    setTotal((prev) => prev + 1);
  };

  const removeItem = (data) => {
    const exist = cart.find((x) => x._id === data._id);

    if (exist?.qty > 1) {
      setCart(
        cart.map((item) =>
          item._id === data._id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
      );
      setTotal((prev) => prev - 1);
    } else {
      setCart(cart.filter((item) => item._id !== data._id));
      setTotal((prev) => prev - 1);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, total, addItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
