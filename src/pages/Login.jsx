import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <h1>Login below</h1>
        <input type="email" placeholder="enter email" />
        <input type="password" placeholder="enter password" />
        <input type="submit" className="btn btn-primary" value="submit" />
      </div>
    </>
  );
};

export default Login;
