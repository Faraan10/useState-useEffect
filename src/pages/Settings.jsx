import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-base-100 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary">
          Account Settings
        </h2>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Update your name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Update your email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              type="password"
              placeholder="Leave blank to keep current"
              className="input input-bordered w-full"
            />
          </div>

          {/* Theme Toggle (optional) */}
          <div className="form-control flex flex-row items-center gap-4">
            <label className="label cursor-pointer">
              <span className="label-text">Enable Dark Mode</span>
            </label>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>

          {/* Save Changes */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
