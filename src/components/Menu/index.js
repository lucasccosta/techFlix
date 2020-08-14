import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/miojoflix.png'
import ButtonLink from './components/ButtonLink/index'
import Button from './components/Button/index'
import './Menu.css'

function Menu(props) {
    const { subTitulo } = props;
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='TechFlix Logo'></img>
            </Link>
            <p className='subTitle'>{subTitulo} e uma aleatoriedade de conteúdos</p>
            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo Vídeo
            </Button>
            {/* <ButtonLink className='ButtonLink' href='/'>
                Novo Vídeo
            </ButtonLink> */}
        </nav>
    )
}

export default Menu;