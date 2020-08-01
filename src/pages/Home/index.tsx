import React, {useEffect, useState} from 'react';
import Menu from "../../components/Menu"
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categories from '../../repositories/categorias';
import Categoria from '../../objects/Category';
import PageDefault from '../../pages/PageDefault'

function App() {
  const [dadosIniciais, setDadosIniciais] = useState<Array<Categoria>>([]);
  
  useEffect(() => {
    categories.getAllCategoriesWithVideos()
    .then((allCategoriesWithVideos) => {
      const categorias = allCategoriesWithVideos.map((categoria: Categoria) => {
        return categoria;
      });
      console.log(allCategoriesWithVideos);
      setDadosIniciais(categorias);
    })
    .catch((err) => {
      console.log(err.message);
    });
  },
  [dadosIniciais]);

  if (dadosIniciais.length) {
    console.log(dadosIniciais)
    return (
      <PageDefault>
        <Menu />
        <BannerMain
          videoTitle={dadosIniciais[0].videos[0].titulo}
          url={dadosIniciais[0].videos[0].url}
          videoDescription={"O que é front-end"}
        />
        <Carousel
          ignoreFirstVideo
          videocategory = {0}
          dadosIniciais={dadosIniciais}
        />
      </PageDefault>
    );
  }
  else {
    return (
    <div>

    </div>
    );
  }
}

export default App;
