import { memo } from 'react';

import * as S from './Message.styles';

type Props = {
  name: string;
  text: string;
  type: 'from' | 'to';
};

const Message: React.FC<Props> = memo(
  ({ name, text, type }: Props): JSX.Element => (
    <S.Container type={type}>
      <S.Author>{name}</S.Author>
      <S.Message type={type}>{text}</S.Message>
    </S.Container>
  ),
);

export { Message };
