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
  return (
    <S.TextButton isSecondary={secondary} as={tag} href={link}>
      {children}
    </S.TextButton>
  );
};

export default TextButton;
