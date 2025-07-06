import React from "react";

import { FiSettings, FiUser, FiLogOut, FiHome } from "react-icons/fi";

const DashBoard = () => {
  return (
    <div className="min-h-screen flex bg-base-200">
      {/* Sidebar below */}
      <div className="w-64 bg-base-100 shadow-lg p-4 hidden md:block">
        <h2 className="text-2xl font-bold text-primary mb-6">My Dashboard</h2>
        <ul className="menu space-y-2">
          <li>
            <a className="flex items-center gap-2">
              <FiHome />
              Home
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2">
              <FiUser />
              Profile
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2">
              <FiSettings />
              Settings
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2 text-error">
              <FiLogOut />
              Logout
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>

        {/* Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Profile Info</h2>
              <p>Manage your profile details and preferences.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Edit</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Account Settings</h2>
              <p>Update your password, email, or preferences.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Go</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Reports</h2>
              <p>View your activity, stats, and more.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
