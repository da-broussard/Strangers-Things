//This component is pretty much done. Able to get posts to populate. Just going to try and add in some more features if I have time.  



import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL =
  "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Post = () => {
  const [allPosts, setAllPosts] = useState([]);

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

  
  return allPosts.map((eachPost, idx) => {
    return (
      
      <div key={idx} className="individual-post">
        <span>Item for sale: </span> <span>{eachPost.title}</span>
        <p>Item description: {eachPost.description}</p>
        <p>Item Price: {eachPost.price}</p>
      </div>
    );
  });
};

export default Post;
