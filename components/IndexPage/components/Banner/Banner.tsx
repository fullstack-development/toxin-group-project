import { TFunction } from 'i18next';
import { withTranslation, WithTranslation } from 'react-i18next';

import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './Banner.styles';

type Props = {
  message: string;
  t: TFunction;
};

const Banner: React.ComponentType<WithTranslation & Props> = ({
  message,
  t,
}: Props): JSX.Element => (
  <S.Banner>
    <SearchRoomForm />
    <S.Message>{t(message)}</S.Message>
  </S.Banner>
);

export default withTranslation()(Banner);
