import { memo } from 'react';

import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './Banner.styles';

type Props = {
  message: string;
};

const Banner = memo(({ message }: Props) => (
  <S.Banner>
    <SearchRoomForm />
    <S.Message>{message}</S.Message>
  </S.Banner>
));

Banner.displayName = 'Banner';

export default Banner;
