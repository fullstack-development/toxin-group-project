import { memo } from 'react';

import * as S from './Benefits.style';

type Props = {
  items: Array<
    {
      term: string;
      definition: string;
      icon: string;
    } & S.Icon
  >;
};

const Benefits = memo(({ items }: Props) => (
  <S.Benefits>
    {items.map(({ term, icon, definition }) => (
      <S.Item key={term}>
        <S.Icon icon={icon} />
        <S.List>
          <S.Term>{term}</S.Term>
          <dd>{definition}</dd>
        </S.List>
      </S.Item>
    ))}
  </S.Benefits>
));

Benefits.displayName = 'Benefits';

export default Benefits;
