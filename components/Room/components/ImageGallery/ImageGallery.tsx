import { useState } from 'react';

import { GalleryProps } from '../../Room.types';
import DotButton from '../DotButton/DotButton';
import * as S from './ImageGallery.styles';

const ImageGallery: React.FC<GalleryProps> = ({
  imagePaths = ['/img/room-1.jpg', '/img/room-2.jpg', '/img/room-3.jpg', '/img/room-4.jpg'],
}: GalleryProps) => {
  const [imageStates, setImageStates] = useState([true, false, false, false]);

  const handleDotClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { index } = e.currentTarget.dataset;
    const state = [false, false, false, false];
    state[index] = true;
    setImageStates(state);
  };

  return (
    <S.Container>
      {imagePaths.map((path, index) => (
        <S.Img key={path + String(index)} src={path} isShown={imageStates[index]} />
      ))}
      <S.Dots>
        {imageStates.map((el, index) => {
          return (
            <S.Dot key={el + String(index)}>
              <DotButton
                type="button"
                data-index={index}
                onClick={handleDotClick}
                buttonId={index}
                isActive={el}
              />
            </S.Dot>
          );
        })}
      </S.Dots>
    </S.Container>
  );
};

export default ImageGallery;
