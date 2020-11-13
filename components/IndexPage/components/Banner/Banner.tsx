import { memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './Banner.styles';

type Props = WithTranslation & {
  message: string;
};

const Banner = memo(({ message, t }: Props) => (
  <S.Banner>
    <SearchRoomForm />
    <S.Message>{t(`Banner:${message}`)}</S.Message>
  </S.Banner>
));

export default withTranslation()(Banner);
