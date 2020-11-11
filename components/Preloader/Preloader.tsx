import { TFunction } from 'i18next';
import { ComponentType, memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import ClipLoader from 'react-spinners/ClipLoader';

import * as S from './Preloader.styles';

type Props = {
  label?: string;
  t: TFunction;
};

const Preloader: ComponentType<WithTranslation & Props> = memo(
  ({ label = 'Loading rooms ...', t }: Props) => (
    <S.Container>
      <S.Label>{t(`RoomFilter:${label}`)}</S.Label>
      <ClipLoader />
    </S.Container>
  ),
);

Preloader.displayName = 'Preloader';

export default withTranslation('RoomFilter')(Preloader);
