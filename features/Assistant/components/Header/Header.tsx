import { memo } from 'react';

import { Avatar } from 'shared/view/elements/Avatar/Avatar';

import * as S from './Header.styles';

type Props = {
  name: string;
  avatarUrl: string;
};

const Header: React.FC<Props> = memo(
  ({ name, avatarUrl }: Props): JSX.Element => (
    <S.Header>
      <Avatar photoURL={avatarUrl} />
      {name}
    </S.Header>
  ),
);

export { Header };
