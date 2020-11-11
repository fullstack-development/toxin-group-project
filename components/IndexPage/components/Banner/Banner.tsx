import { TFunction } from 'i18next';
import { ComponentType, memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './Banner.styles';

type Props = {
  message: string;
  t: TFunction;
};

const Banner: ComponentType<WithTranslation & Props> = memo(({ message, t }: Props) => (
  <S.Banner>
    <SearchRoomForm />
    <S.Message>{t(`Banner:${message}`)}</S.Message>
  </S.Banner>
));

Banner.displayName = 'Banner';

export default withTranslation()(Banner);
