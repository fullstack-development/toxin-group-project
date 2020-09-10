import { ReactNode } from 'react';

import * as S from './Button.styles';

type ButtonProps = {
  filled?: boolean;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  filled = false,
}: ButtonProps) => <S.Button isFilled={filled}>{children}</S.Button>;

export default Button;
