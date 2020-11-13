import React from 'react';

import * as S from './NavBar.styles';

type NavBar = {
  onPreviousClick?(callback?: () => void): void;
  onNextClick?(callback?: () => void): void;
};

const NavBar = ({ onPreviousClick, onNextClick }: NavBar): JSX.Element => {
  const handlePreviousButtonClick = () => onPreviousClick();
  const handleNextButtonClick = () => onNextClick();

  return (
    <S.Container>
      <S.NavBarButton type="button" onClick={handlePreviousButtonClick}>
        arrow_back
      </S.NavBarButton>
      <S.NavBarButton type="button" onClick={handleNextButtonClick}>
        arrow_forward
      </S.NavBarButton>
    </S.Container>
  );
};

export { NavBar };
