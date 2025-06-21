import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ cart, total }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">
          Ecommerce Store
        </Link>
      </div>

      {/* Right: Desktop Menu */}
      <div className="hidden lg:flex gap-4 items-center">
        <Link className="btn btn-ghost text-md" to="/products">
          Products
        </Link>
        <Link className="btn btn-ghost text-md" to="/about">
          About
        </Link>
        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cart.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{cart.length} Items</span>
              <span className="text-info">Subtotal: ${total}</span>
              <div className="card-actions">
                <Link to="/cart">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="user avatar"
                src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <button className="btn btn-primary w-full">Logout</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Button (mobile) */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-base-100 shadow-lg rounded-lg p-4 w-60 z-50 lg:hidden">
          <Link
            to="/products"
            className="block py-2 px-4 hover:bg-base-200 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 hover:bg-base-200 rounded"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/cart"
            className="block py-2 px-4 hover:bg-base-200 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Cart ({cart.length})
          </Link>
          <Link
            to="/profile"
            className="block py-2 px-4 hover:bg-base-200 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="block py-2 px-4 hover:bg-base-200 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Settings
          </Link>
          <button className="btn btn-primary w-full mt-2">Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
