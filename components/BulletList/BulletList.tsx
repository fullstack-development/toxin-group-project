import { memo } from 'react';

import * as S from './BulletList.styles';

type Props = {
  items: string[];
};

const BulletList = memo(({ items = ['No items passed'] }: Props) => (
  <S.List>
    {items.map((el) => (
      <S.Item key={el}>{el}</S.Item>
    ))}
  </S.List>
));

BulletList.displayName = 'BulletList';

export default BulletList;
