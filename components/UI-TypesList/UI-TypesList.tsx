import UIType from 'components/UI-Type/UI-Type';

import * as S from './UI-TypesList.styles';

type Type = {
  type: string;
  example: string;
  fontSize: string;
};

type Props = {
  types: Array<Type>;
};

const UITypes: React.FC<Props> = ({ types }: Props) => (
  <section>
    <S.Title>Вариации текста</S.Title>
    <S.List lang="en">
      {types.map((type) => (
        <li key={type.type}>
          <UIType type={type.type} example={type.example} fontSize={type.fontSize} />
        </li>
      ))}
    </S.List>
  </section>
);

export default UITypes;
