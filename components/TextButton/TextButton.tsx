import { HTMLProps } from 'react';

import * as S from './TextButton.styles';

type TextButtonProps = {
  secondary?: boolean;
} & HTMLProps<HTMLButtonElement>;

const TextButton: React.FC<TextButtonProps> = ({
  secondary = false,
  ...rest
}: TextButtonProps) => {
  const tag = rest.href ? 'a' : 'button';

  return (
    <S.TextButton isSecondary={secondary} as={tag} {...rest} />
  );
};

export default TextButton;
