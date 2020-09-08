import { ReactNode } from 'react';
import * as S from './Button.styles';

type ButtonProps = {
  filled?: boolean;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  filled = false,
}: ButtonProps) => (filled ? (
  <S.Button>{children}</S.Button>
) : (
  <S.SecondaryButton>{children}</S.SecondaryButton>
));

export default Button;
