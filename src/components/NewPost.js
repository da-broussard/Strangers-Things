import React, { useState } from "react";
import axios from "axios";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const baseURL =
    "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

  const addNewPost = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/posts`, {
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          // willDeliver: `${willDeliver}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="posts-page">
      <form onSubmit={ addNewPost}>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Product Description:</label>
          <textarea
            type="textarea"
            rows="4"
            cols="10"
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            onChange={(event) => setPrice(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            onChange={(event) => setLocation(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Will Deliver</label>
          <input
            type="checkbox"
            onChange={(event) => setWillDeliver(event.target.value)}
          ></input>
        </div>
        <button type="submit">Submit New Post</button>
      </form>
    </div>
  );
};

export default NewPost;
