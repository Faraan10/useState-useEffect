import React from "react";

const Register = () => {
  return (
    <>
      <div>
        <h1>Register below</h1>
        <input type="text" placeholder="enter name" />
        <input type="email" placeholder="enter email" />
        <input type="password" placeholder="enter password" />
        <input type="password" placeholder="re-enter password" />

        <input type="submit" className="btn btn-primary" value="submit" />
      </div>
    </>
  );
};

export default Register;
