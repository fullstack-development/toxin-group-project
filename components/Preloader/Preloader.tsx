import { TFunction } from 'i18next';
import { withTranslation, WithTranslation } from 'react-i18next';
import ClipLoader from 'react-spinners/ClipLoader';

import * as S from './Preloader.styles';

type Props = {
  label?: string;
  t: TFunction;
};

const Preloader: React.ComponentType<WithTranslation & Props> = ({
  label = 'Loading rooms ...',
  t,
}: Props) => (
  <S.Container>
    <S.Label>{t(`RoomFilter:${label}`)}</S.Label>
    <ClipLoader />
  </S.Container>
);

export default withTranslation('RoomFilter')(Preloader);
