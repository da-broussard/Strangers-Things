import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL =
  "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [currentUser, setCurrentUser] = useState('');

  const addUser = async (event) => {
    event.preventDefault();
    if (passWord !== confirmPassword) {
      alert("PASSWORDS DO NOT MATCH");
    } else {
      try {
        const response = await axios.post(`${baseURL}/users/register`, {
          user: {
            username: userName,
            password: passWord,
          },
        });
        console.log(response.data.data.token);
        
        window.localStorage.setItem('token', response.data.data.token);
        setUserName(' ');
        setPassword(' ');
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="add-new-user">
      <h3>
        Please enter a Username & Password to start using Strangers-Things
      </h3>
      <form onSubmit={addUser}>
        <div className="username-field">
          <label>Username:</label>
          <input
            type="text"
            required
            minLength={8}
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </div>
        <div className="password-field">
          <label>Password:</label>
          <input
            type="password"
            required
            minLength={8}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <label>Confirm Password</label>
          <input
            type="password"
            required
            minLength={8}
            onChange={(event) => setConfirmPassword(event.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
      <p>Usernames and Passwords must be have 8 characters or more</p>
    </div>
  );
};

export default Register;
