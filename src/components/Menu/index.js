import React from 'react'
import Logo from '../../assets/img/techflix.png'
import ButtonLink from './components/ButtonLink/index'
import Button from './components/Button/index'
import './Menu.css'

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='TechFlix Logo'></img>
            </a>

            <Button as='a' className='ButtonLink' href='/'>
                Novo Vídeo
            </Button>
            {/* <ButtonLink className='ButtonLink' href='/'>
                Novo Vídeo
            </ButtonLink> */}
        </nav>
    )
}

export default Menu;