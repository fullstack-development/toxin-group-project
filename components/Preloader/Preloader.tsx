import ClipLoader from 'react-spinners/ClipLoader';

import * as S from './Preloader.styles';

type Props = {
  label?: string;
};

const Preloader: React.FC<Props> = ({ label = 'Загружаем номера...' }: Props) => (
  <S.Container>
    <S.Label>{label}</S.Label>
    <ClipLoader />
  </S.Container>
);

export default Preloader;
