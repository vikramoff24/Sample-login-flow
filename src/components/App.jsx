import React from "react";
import Login from "./Login";
import Register from "./Register";

//change the boolean value to shift between the login page, register page and home page.
var isLoggedIn = false;
var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? (
        !isLoggedIn ? (
          <Login />
        ) : (
          <h1>Hello</h1>
        )
      ) : (
        <Register />
      )}
    </div>
  );
}

export default App;
