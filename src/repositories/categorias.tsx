import {useEffect} from 'react' 
import URL from '../config';

const URL_CATEGORIAS = `${URL}/categorias`

function getAllCategoriesWithVideos() {
  return fetch(`${URL}?_embed = videos`)
  .then(async (response) => {
    const resposta = await response.json();
    if (response.ok) {
      return resposta;
    }
    throw new Error("Não foi possível retornar as categorias");
  });
}

export default {
   getAllCategoriesWithVideos,
}