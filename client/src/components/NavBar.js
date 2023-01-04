import React from 'react'
import { NavLink } from 'react-router-dom';
import Me from './Me';


function NavBar({currentUser}){
    return(
        <div className='nav-bar'>
            {currentUser?<NavLink to='/me' className='nav-item' id='nav-item-me'>Me</NavLink> : <NavLink to='/login' className='nav-item' id='nav-item-login'>Login</NavLink>}
            <NavLink to='/' className='nav-item' id='nav-item-quizzes'>Quizzes</NavLink>
            <NavLink to='/create-quiz' className='nav-item' id='nav-item-add-quiz'>Create Quiz</NavLink>
        </div>
    )
}

export default NavBar