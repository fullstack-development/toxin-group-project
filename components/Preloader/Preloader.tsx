import { memo } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import * as S from './Preloader.styles';

type Props = {
  label?: string;
};

const Preloader = memo(({ label = 'Загружаем номера...' }: Props) => (
  <S.Container>
    <S.Label>{label}</S.Label>
    <ClipLoader />
  </S.Container>
));

Preloader.displayName = 'Preloader';

export default Preloader;
