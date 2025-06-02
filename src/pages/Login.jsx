const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-base-100 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary">Login</h2>
        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>

        <p className="text-center text-sm text-base-content">
          Don't have an account?{" "}
          <a href="#" className="link link-primary">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
