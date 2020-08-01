import {useEffect} from 'react' 
import URL from '../config';
import Category from '../objects/Category';
import Video from '../objects/Video';

const URL_CATEGORIAS = `${URL}/categorias`
const URL_VIDEOS = `${URL}/videos`

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed = videos`)
  .then(async (response) => {
    const resposta = await response.json();
    if (response.ok) {
      return resposta;
    }
    throw new Error("Não foi possível retornar as categorias");
  });
}

function getVideos(objetoDoVideo: Video) {
  return fetch(`${URL_VIDEOS}?_embed = videos`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
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
   getVideos
}