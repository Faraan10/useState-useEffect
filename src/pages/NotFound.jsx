import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <h1 className="text-6xl font-bold text-error mb-4">404</h1>
      <p className="text-xl text-base-content mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary flex items-center gap-2">
        <FiArrowLeft /> Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
