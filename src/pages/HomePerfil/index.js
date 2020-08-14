import React from 'react';
import { Link } from 'react-router-dom'
import './HomePerfil.css'
import MenuHome from '../../components/MenuHome/index';
import LogoArte from '../../assets/img/art.png'
import LogoReceitas from '../../assets/img/food.png'
import LogoTech from '../../assets/img/tech.png'
import LogoSeries from '../../assets/img/series.png'

function HomePerfil() {
  return(
    <div>
      <MenuHome />
      <div className='container-grande'>
        <div className='container-title'>
          <h3>Qual o seu estilo?</h3>
        </div>
        <div className='container'>
          <Link className='container-link' to='/arte'>
            <img className='Logo' src={LogoArte} id='arte'/>
            <p className='p'>Arte</p>
          </Link>
          <Link className='container-link' to='/'>
            <img className='Logo' src={LogoReceitas} id='receitas'/>
            <p className='p'>Receitas</p>
          </Link>
          <Link className='container-link' to='/tech'>
            <img className='Logo' src={LogoTech} id='tecnologia'/>
            <p className='p'>Tecnologia</p>
          </Link>
          <Link className='container-link' to='/'>
            <img className='Logo' src={LogoSeries} id='filmesSeries'/>
            <p className='p'>Filmes e Séries</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePerfil;