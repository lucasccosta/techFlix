import React from 'react';
import '../../App.css';
import Menu from '../../components/Menu/index'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

function Layout (props) {
  const { dados, pageColor, subTitulo  } = props
  return (
    // <div style={{background: pageColor}}>
    <div style={{background: "#141414"}}>
      <Menu subTitulo={subTitulo}/>
      <BannerMain 
      videoTitle={dados.categorias[0].videos[0].titulo}
      url={dados.categorias[0].videos[0].url}
      videoDescription={dados.categorias[0].videos[0].descricao}
      />

      <Carousel
        ignoreFirstVideo
        category={dados.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category={dados.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo
        category={dados.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo
        category={dados.categorias[3]}
      />
      <Footer />
    </div>
  );
}

export default Layout;
