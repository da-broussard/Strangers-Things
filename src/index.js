import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

import {
  Title,
  Post,
  Register,
  NewPost,
  NavBar,
  Login,
  Profile,
  SendMessage,
} from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [userToken, setUserToken] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  return (
    <main>
      <div className="headerNavBar">
        <Title />
        <NavBar />
      </div>

      <div className="main-body">
        <Routes>
          <Route exact path="/" element={<Login
              userToken={userToken}
              setUserToken={setUserToken}
              userLogin={userLogin}
              userPassword={userPassword}
              setUserLogin={setUserLogin}
              setUserPassword={setUserPassword}
            />} />
            
        

          <Route
            path="/post"
            element={
              <Post
                allPosts={allPosts}
                setAllPosts={setAllPosts}
                willDeliver={willDeliver}
                setWillDeliver={setWillDeliver}
              />
            }
          />

          <Route path="/newpost" element={<NewPost/>} />
          <Route path="/register" element={<Register/>} />
          <Route
            path="/profile"
            element={
              <Profile
                userToken={userToken}
                userLogin={userLogin}
                setUserToken={setUserToken}
              />
            }
          />

          <Route path="/:id" element={<SendMessage userToken={userToken} />} />
        </Routes>
      </div>
    </main>
  );
};

// const appElement = document.getElementById("app");
// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   appElement
// );

const appElement= document.getElementById("app");
const root = ReactDOM.createRoot(appElement);
root.render(
  <React.StrictMode>
    <Router>
    <App/>
    </Router>
  </React.StrictMode>
)
