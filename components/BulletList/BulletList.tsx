import { TFunction } from 'i18next';
import { ComponentType, memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import * as S from './BulletList.styles';

type Props = {
  items: string[];
  t: TFunction;
};

const BulletList: ComponentType<WithTranslation & Props> = memo(
  ({ items = ['No items passed'], t }: Props) => (
    <S.List>
      {items.map((el) => (
        <S.Item key={el}>{t(el)}</S.Item>
      ))}
    </S.List>
  ),
);

BulletList.displayName = 'BulletList';

export default withTranslation('Bullets')(BulletList);
