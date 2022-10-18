import React, { useState } from "react";
import "./SendMessage.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const baseURL =
  "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const SendMessage = ({ userToken }) => {
  const [messageText, setMessageText] = useState("");
  const { id } = useParams();
  
  const navigate = useNavigate();
  
    async function sendMessage(event) {
      event.preventDefault();
      try {
      await axios.post(`${baseURL}/posts/${id}/messages`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
         
        },
        message: {
          content: { messageText },
        },
      });
    }
   catch (error) {
    console.error(error);
  }
}

  return (
    <div className="message-form">
      {userToken ? (
        <form>
          <label></label>

          <textarea
            rows={20}
            cols={100}
            onChange={(event) => setMessageText(event.target.value)}
            placeholder="Please enter message"
          ></textarea>

          <button onClick={() => sendMessage()}>Send Message</button>
          <button onClick={() => navigate(`/post`)}>Back to Posts</button>
        </form>
      ) : (
        <h3>Please login to send messages to seller</h3>
      )}
    </div>
  );
};

export default SendMessage;
