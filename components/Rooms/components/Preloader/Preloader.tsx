import ClipLoader from 'react-spinners/ClipLoader';

import * as S from './Preloader.styles';

type PreloaderProps = {
  label?: string;
};

const Preloader: React.FC<PreloaderProps> = ({ label = 'Загружаем номера...' }: PreloaderProps) => (
  <S.Container>
    <S.Label>{label}</S.Label>
    <ClipLoader />
  </S.Container>
);

export default Preloader;
