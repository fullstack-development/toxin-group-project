import { TFunction } from 'i18next';
import { ComponentType, memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import * as S from './Benefits.style';

type Props = {
  items: Array<
    {
      term: string;
      definition: string;
      icon: string;
    } & S.Icon
  >;
  t: TFunction;
};

const Benefits: ComponentType<WithTranslation & Props> = memo(({ items, t }: Props) => (
  <S.Benefits>
    {items.map(({ term, icon, definition }) => (
      <S.Item key={term}>
        <S.Icon icon={icon} />
        <S.List>
          <S.Term>{t(term)}</S.Term>
          <dd>{t(definition)}</dd>
        </S.List>
      </S.Item>
    ))}
  </S.Benefits>
));

Benefits.displayName = 'Benefits';

export default withTranslation('Benefits')(Benefits);
