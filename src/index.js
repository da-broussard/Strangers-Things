import React, {useState} from "react";
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
  SendMessage
} from "./components";


const App = () => {

  const [allPosts, setAllPosts] = useState([]);
  const [userToken, setUserToken] = useState("");
 
 
  return (
    <main>
      <div className='headerNavBar'>
      <Title />
      <NavBar />
      </div>

      <div className="main-body">
        
        <Route exact path="/">
          <Login userToken={userToken} setUserToken={setUserToken}/>
        </Route>
       
          <Route path="/post"> 
            <Post allPosts={allPosts} setAllPosts={setAllPosts}/>
          </Route>
        
        <Route path="/newpost" component={NewPost} />
        <Route path="/register" component={Register} />
        <Route path="/profile"  >
          <Profile userToken={userToken}/>
        </Route>
        <Route path='/sendmessage' component={SendMessage}/>

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
