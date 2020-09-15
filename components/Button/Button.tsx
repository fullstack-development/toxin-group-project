import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  isFilled = false,
  href,
  ...rest
}: ButtonProps) => (href ? (
  <S.Link {...rest} isFilled={isFilled} href={href} />
) : (
  <S.Button {...rest} isFilled={isFilled} />
));

export default Button;
