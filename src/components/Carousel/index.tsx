import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
//import dadosIniciais from '../../data/dados_iniciais.json';
import Slider, { SliderItem } from '../Slider';
import Category from '../../objects/Category';
import VideoCardType from '../../objects/VideoCard';
import Categoria from '../../objects/Category';

interface MyVideo {
  ignoreFirstVideo: boolean,
  videocategory: number,
  dadosIniciais: Array<Categoria>
}

function Carousel({ignoreFirstVideo, videocategory, dadosIniciais}:MyVideo) {
  const category = dadosIniciais[videocategory]; 
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
