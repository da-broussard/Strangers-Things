import React from "react";
import { Link, useHistory } from "react-router-dom";


const NavBar= ()=>{

    return(
        <aside className='site-links'>
            <Link className='links' to='/post'>See Post</Link>
            <Link className='links' to='/newpost'>Make A New Post</Link>
            <Link className='links' to='/register'>Create Account</Link>
            <Link className='links' to='/profile'>Profile</Link>
        </aside>
    )
}

export default NavBar;