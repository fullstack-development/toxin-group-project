import ClipLoader from 'react-spinners/ClipLoader';

import i18next from 'services/i18next';

import * as S from './Preloader.styles';

type Props = {
  label?: string;
};

const Preloader: React.FC<Props> = ({ label = i18next.t('Loading numbers ...') }: Props) => (
  <S.Container>
    <S.Label>{label}</S.Label>
    <ClipLoader />
  </S.Container>
);

export default Preloader;
