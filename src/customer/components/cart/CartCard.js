import React, { useState } from "react";

const CartCard = () => {
  // State to keep track of quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle increment of quantity
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrement of quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Placeholder function for remove action
  const handleRemove = () => {
    console.log("Remove item logic goes here");
    // Implement remove item from cart logic here
  };

  return (
    <div className="p-5 shadow-lg border rounded-md m-3">
      <div className="flex justify-between">
        <div className="flex">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/v/_/v_ng_18.png"
              alt="product"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="ml-5">
            <h1 className="text-lg font-bold">
              iPhone 15 Pro Max 256GB | Chính hãng VN/A
            </h1>
            <p className="text-sm">Product Description</p>
            <p className="text-red-500 font-bold">Giá: $100</p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="text-red-500 font-bold text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2 md:px-3 lg:px-4"
            onClick={handleDecrement}
          >
            -
          </button>
          <p className="mx-2">{quantity}</p>
          <button
            className="text-green-500 font-bold text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2 md:px-3 lg:px-4"
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500 p-1 sm:p-2 md:p-3 lg:p-4 text-xs sm:text-sm md:text-base lg:text-lg"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
