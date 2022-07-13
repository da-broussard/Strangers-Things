import React, { useState } from "react";
import axios from "axios";

const baseURL =
  "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Login = () => {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userToken, setUserToken]= useState('')
  console.log(userLogin);
  console.log(userPassword)

  const logInUser = async (event) => {
    event.preventdefault();
    try {
      const response = await axios.get("${baseURL}/users/login", {
        user: {
          username: userLogin,
          password: userPassword,
        },
      });
      console.log(response)
   
      window.localStorage.setItem(`token`,  response.data.data.token)
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <div>
      <form onSubmit={logInUser}>
        <label>Username</label>
        <input
          type="text"
          required
          onChange={(event) => setUserLogin(event.target.value)}
        ></input>
        <br></br>
        <label>Password</label>
        <input
          type="password"
          required
          onChange={(event) => setUserPassword(event.target.value)}
        ></input>
        <br></br>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
