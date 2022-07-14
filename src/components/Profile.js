import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL =
  "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

// Havent really touch this part yet.  Once I figure out issues Im having with other components I should be able to get this.  
const Profile = () =>{

    // const [allMessages, setAllMessages]= useState([]);

    // useEffect(() => {
    //     const fetchMessages = async () => {
    //       try {
    //         const response = await axios.get(`${baseURL}/messages`); console.log(response);
    //         setAllMessages(response.data.data.posts);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     };
    //     fetchMessages();
    // },[])
}

export default Profile;