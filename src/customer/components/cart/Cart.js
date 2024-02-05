import React from "react";
import CartCard from "./CartCard";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2">
          <CartCard></CartCard>
          <CartCard></CartCard>
          <CartCard></CartCard>
          <CartCard></CartCard>
        </div>

        <div className="lg:col-span-1 m-3">
          <div className="p-5 shadow-lg border rounded-md">
            <h1 className="text-2xl font-bold mb-5">Cart Summary</h1>
            <div className="flex justify-between mb-5">
              <p className="text-lg font-bold">Subtotal</p>
              <p className="text-lg font-bold">$100</p>
            </div>
            <div className="flex justify-between mb-5">
              <p className="text-lg font-bold">Shipping</p>
              <p className="text-lg font-bold">$10</p>
            </div>
            <div className="flex justify-between mb-5">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">$110</p>
            </div>
            <button
              type="button"
              className="w-full bg-indigo-600 text-white font-bold p-3 rounded-md"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
