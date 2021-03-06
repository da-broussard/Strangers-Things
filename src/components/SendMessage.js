import React, {useState} from "react";
import './SendMessage.css'


const SendMessage = ({userLogin, allPosts}) =>{

    const [messageText, setMessageText]= useState('')
    
   

    return(
        <div className='message-form'>
            <span>From : {userLogin} </span> <span>To: </span>
            <form>
                <label></label>

                <textarea  rows={20} cols={100} onChange={(event)=>setMessageText(event.target.value)}
                placeholder='Please enter message'></textarea>
                
                <button type='submit s'>Send Message</button>
                
            </form>
        </div>
    )
}

export default SendMessage;