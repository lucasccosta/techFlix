import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
// import Home from './pages/Home/index';
import Layout from './pages/Layout'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'
import HomePerfil from './pages/HomePerfil';


import dadosTech from './data/dados_tech.json'
import dadosArte from './data/dados_arte.json'


const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePerfil}/>
      <Route path='/home' component={HomePerfil}/>

      <Route path='/tech'>
        {/* CASO QUEIRA MUDA A COR <Layout dados={dadosIniciais} pageColor={"#ff8a80"}/> */}
        <Layout dados={dadosTech} subTitulo='tecnologia' />
      </Route>
      <Route path='/arte'>
        <Layout dados={dadosArte} subTitulo='arte'/>
      </Route>

      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route component={Pagina404} /> 	
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
