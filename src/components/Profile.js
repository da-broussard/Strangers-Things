import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const baseURL =
  "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Profile = ({ userToken }) => {
  const [allMessages, setAllMessages] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

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
      } catch (error) {}
    };
    fetchMe();
  }, []);

  // const deletePost = async ({myPosts.id}) => {

  // }

  return (
    <>
    <h1>My Messages</h1>
    {allMessages.length === 0 ? <h3>You currently do not have any messages</h3>:null}

      
      <h1>My Posts</h1>
      {userPosts.length === 0 ? <h3>You currently do not have any posts</h3>:
      userPosts.map((myPosts, idx) => {
        return (
          <div key={idx} className="my-posts">
            <span>Item for sale: </span> <span>{myPosts.title}</span>
            <p>Item description: {myPosts.description}</p>
            <p>Item Price: ${myPosts.price}</p>
            <div className='my-posts-buttons'>
              <button>Edit Post</button>
              <button type='submit'>Delete Post</button>
            </div>
          </div>
        );
      })}
      
      
    </>
  );
};

export default Profile;
