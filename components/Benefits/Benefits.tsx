import { TFunction } from 'i18next';
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

const Benefits: React.ComponentType<WithTranslation & Props> = ({
  items,
  t,
}: Props): JSX.Element => (
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
);

export default withTranslation('Benefits')(Benefits);
