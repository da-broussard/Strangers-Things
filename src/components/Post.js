import './Post.css'; 



import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL =
  "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Post = ({allPosts, setAllPosts}) => {
  // const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${baseURL}/posts`); 
        setAllPosts(response.data.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
    
  }, []);

  
  return (
    <>
    <h1>Posts</h1>
    {allPosts.map((eachPost, idx) => {
        return (
          
          <div key={idx} className="individual-post">
            <span>Item for sale: </span> <span>{eachPost.title}</span>
            <p>Item description: {eachPost.description}</p>
            
            <p>Item Price: ${eachPost.price}</p>
            <p>Seller: {eachPost.author.username}</p>
            <div className='message-button'>
            <button >Send Seller Message</button>
            </div>
          </div>
        );
      })}
    </>
    )
  
};

export default Post;
