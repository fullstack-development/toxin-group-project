import * as S from './Button.styles';
import { ButtonProps, LinkProps } from './Button.types';

const Button: React.FC<ButtonProps | LinkProps> = ({
  isFilled = false,
  ...rest
}: ButtonProps) => <S.Button isFilled={isFilled} {...rest} />;

export default Button;
