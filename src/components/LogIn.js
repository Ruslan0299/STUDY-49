import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LogIn = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const submit = (e) => {
    e.preventDefault();
    dispatchFunc({ type: "logIn" });
  };
  const logOut = () => {
    dispatchFunc({ type: "logOut" });
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" />
      {!isLoggedIn && <button type="submit">Log In</button>}
      {isLoggedIn && (
        <button type="button" onClick={logOut}>
          {" "}
          Log Out
        </button>
      )}
    </form>
  );
};

export default LogIn;
