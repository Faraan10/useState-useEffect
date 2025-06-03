import React from "react";

const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    quantity: 2,
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    quantity: 1,
    image: "https://via.placeholder.com/80",
  },
];

const Cart = () => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-lg text-base-content">
          Your cart is empty.
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-base-100 p-4 rounded-xl shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-base-content">
                    Price: ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className="text-base-content">Qty: {item.quantity}</p>
                <button className="btn btn-sm btn-outline btn-error">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h3>
            <button className="btn btn-primary mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
