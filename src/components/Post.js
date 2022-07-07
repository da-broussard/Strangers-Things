import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL =
  "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Post = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${baseURL}/posts`); console.log(response);
        setAllPosts(response.data.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
    
  }, []);

  return allPosts.map((eachPost, idx) => {
    return (
      <div key={idx} class="individual-post">
        <p>{eachPost.title}</p>
        <p>{eachPost.description}</p>
        <p>{eachPost.price}</p>
      </div>
    );
  });
};

export default Post;
