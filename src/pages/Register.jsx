import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // console.log(data);

  const { name, email, password } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() && !email.trim() && !password.trim()) {
      return false;
    }
    console.log(data);
    setData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-base-100 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary">
          Register
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
              onChange={handleChange}
              name="name"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full"
              required
              onChange={handleChange}
              name="password"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Register</button>
          </div>
        </form>

        <p className="text-center text-sm text-base-content">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
