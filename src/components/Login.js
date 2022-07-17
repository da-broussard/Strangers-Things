import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const baseURL =
  "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Login = ({ userToken, setUserToken, userLogin, userPassword, setUserLogin, setUserPassword}) => {
  // const [userLogin, setUserLogin] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  // const [userToken, setUserToken] = useState("");

  console.log(userLogin);
  console.log(userPassword);
  console.log(userToken);

  const logInUser = async (event) => {
    event.preventDefault();
    fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: userLogin,
          password: userPassword,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        window.localStorage.setItem("token", result.data.token);
        setUserToken(localStorage.getItem("token"));
      })
      .catch(console.error);
  };

  return (
    <main>
      <h1 className="main-page-header">
        Please login to view posts and see all of the great items listed on
        STRANGERS THINGS
      </h1>

      {userToken ? <h1 className='user-statement'>You are currently logged in as {userLogin}</h1> :
      <div className="login-field">
        <form onSubmit={logInUser}>
          <label>Username</label>
          <br></br>
          <input
            type="text"
            required
            onChange={(event) => setUserLogin(event.target.value)}
          ></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            required
            onChange={(event) => setUserPassword(event.target.value)}
          ></input>
          <br></br>
          <button type="submit">Log In</button>
        </form>
      </div>
      
    }
    </main>
  );
};

export default Login;
