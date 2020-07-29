import React from 'react';
import Menu from "../../components/Menu"
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
//import BannerMain from './components/BannerMain';

function App() {
  return (
    <div className="App">
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end"}
      />

      <Carousel
        ignoreFirstVideo
        videocategory = {0}
      />
    </div>
  );
}

export default App;
