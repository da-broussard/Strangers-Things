import React from 'react';
import ReactDOM from 'react-dom';

import{
    Navbar,
    Post,
} from './components'


const App = () =>{
    
    return( 
        <main>
        <Navbar/>
        <Post/>
        </main>
        
    )
    
}

const appElement=document.getElementById('app');
ReactDOM.render(<App/>, appElement);