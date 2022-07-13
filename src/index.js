import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import {
  Title,
  Post,
  Register,
  NewPost,
  NavBar,
  Login,
  Profile,
} from "./components";

const App = () => {
  return (
    <main>
      <Title />

      <div className="main-body">
        <NavBar />
        <Route exact path="/" component={Login}></Route>
        <div id='post-page'>
          <Route path="/post" component={Post} />
        </div>
        <Route path="/newpost" component={NewPost} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
      </div>
    </main>
  );
};

const appElement = document.getElementById("app");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  appElement
);
