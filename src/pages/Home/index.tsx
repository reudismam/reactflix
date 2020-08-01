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
  []);

  return (
    <PageDefault> 
        <Menu />

        {dadosIniciais.length && (<div></div>)}
        
        {dadosIniciais.map((categoria, indice) => {
            if (indice == 0) {
              return (
                <div key={indice}>
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
              </div>
              );
            }

            return (
              <Carousel
                      ignoreFirstVideo={false}
                      videocategory = {indice}
                      dadosIniciais={dadosIniciais}
              />
            );
        })}
          
  </PageDefault>
  );
}

export default App;
