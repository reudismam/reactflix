import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import dadosIniciais from '../../data/dados_iniciais.json';
import Slider, { SliderItem } from '../Slider';

/*interface Video {
  titulo: string,
  url: string
}

interface LinkExtra {
  url: string,
  text: string
}

interface Category {
  titulo: string,
  cor: string,
  link_extra: LinkExtra,
  videos: Video []
}
*/
interface VideoCard {
  ignoreFirstVideo: boolean,
  videocategory: number,
}

function Carousel({
  ignoreFirstVideo,
  videocategory,
}: VideoCard) {
  const category = dadosIniciais.categorias[videocategory]; 
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
