import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/miojoflix.png'
import './MenuHome.css'

function MenuHome() {
    return (
        <nav className='menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='TechFlix Logo'></img>
            </Link>
        </nav>
    )
}

export default MenuHome;