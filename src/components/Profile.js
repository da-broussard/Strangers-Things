import React, { useEffect, useState,  } from "react";
import axios from "axios";
import "./Profile.css";

const baseURL =
  "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Profile = ({ userToken, userLogin, setUserToken }) => {
  const [allMessages, setAllMessages] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  let {_id}= myPosts

  useEffect(() => {
    const fetchMe = async () => {
      console.log(userToken);

      try {
        const response = await fetch(`${baseURL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        });
        let results = await response.json();
        console.log(results);
        setAllMessages(results.data.messages);
        setUserPosts(results.data.posts);
        setCurrentUser(results.data.username);
      } catch (error) {}
    };
    fetchMe();
  }, []);

  const deletePost = async () => {
    const results = await fetch(`${baseURL}/posts/${myPosts._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert(`${userPosts.title} had been deleted`);
        console.log(userPosts._id);
      })
      .catch(console.error);
  };

  return (
    <>
      {/* {!userToken ? <h2 className='please-login-statement'>Please Login or Create an account to start looking at Strangers Things</h2>: null } */}
      {currentUser ? (
        <h2 className="profile-statement">
          Hello {currentUser}, let's look at strangers things!!{" "}
        </h2>
      ) : null}

      <h1>My Messages</h1>

      {allMessages.length === 0 ? (
        <h3>You currently do not have any messages</h3>
      ) : (
        allMessages.map((myMessages, idx) => {
          return (
            <div key={idx} className="my-messages">
              <p>Post: {myMessages.post.title}</p>
              <p>Sent From: {myMessages.fromUser.username}</p>
              <p>Message: {myMessages.content}</p>
            </div>
          );
        })
      )}

      <h1>My Posts</h1>
      {userPosts.length === 0 ? (
        <h3>You currently do not have any posts</h3>
      ) : (
        userPosts.map((myPosts, idx) => {
          console.log(myPosts)
          return (
            <div key={idx}  className="my-posts">
              <span>Item for sale: </span> <span>{myPosts.title}</span>
              <p>Item description: {myPosts.description}</p>
              <p>Item Price: ${myPosts.price}</p>
              <div className="my-posts-buttons">
                <button>Edit Post</button>
                <button onClick={deletePost} value={myPosts._id}>Delete Post {myPosts._id}</button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Profile;
