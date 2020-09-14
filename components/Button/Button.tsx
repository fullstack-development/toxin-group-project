import { ComponentPropsWithoutRef } from 'react';

import * as S from './Button.styles';

export type ButtonProps = {
  isFilled?: boolean;
} & ComponentPropsWithoutRef<'button'>
& ComponentPropsWithoutRef<'a'>

const Button: React.FC<ButtonProps> = ({
  isFilled = false,
  ...rest
}: ButtonProps) => <S.Button isFilled={isFilled} {...rest} />;

export default Button;
