import { TFunction } from 'i18next';
import { withTranslation, WithTranslation } from 'react-i18next';

import * as S from './BulletList.styles';

type BulletListProps = {
  items: string[];
  t: TFunction;
};

const BulletList: React.ComponentType<WithTranslation & BulletListProps> = ({
  items = ['No items passed'],
  t,
}: BulletListProps) => (
  <S.List>
    {items.map((el) => (
      <S.Item key={el}>{t(el)}</S.Item>
    ))}
  </S.List>
);

export default withTranslation('Bullets')(BulletList);
