import { ReactNode } from 'react';
import * as S from './TextButton.styles';

type TextButtonProps = {
  secondary?: boolean;
  children?: ReactNode;
  link?: string;
};

const TextButton: React.FC<TextButtonProps> = ({
  link,
  children,
  secondary = false,
}: TextButtonProps) => {
  const tag = link ? 'a' : 'button';
  return (secondary ? (
    <S.TextButton as={tag} href={link}>
      {children}
    </S.TextButton>
  ) : (
    <S.SecondaryTextButton as={tag} href={link}>
      {children}
    </S.SecondaryTextButton>
  ));
};

export default TextButton;
