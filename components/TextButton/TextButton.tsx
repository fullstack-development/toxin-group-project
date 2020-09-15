import { ComponentPropsWithoutRef, ElementType } from 'react';

import * as S from './TextButton.styles';

type TextButtonProps = {
  secondary?: boolean;
  as?: ElementType;
} & ComponentPropsWithoutRef<'button'>
& ComponentPropsWithoutRef<'a'>;

const TextButton: React.FC<TextButtonProps> = ({
  secondary = false,
  ...rest
}: TextButtonProps) => {
  const tag = rest.href ? 'a' : 'button';

  return (
    <S.TextButton {...rest} isSecondary={secondary} as={tag} />
  );
};

export default TextButton;
