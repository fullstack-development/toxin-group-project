import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ isFilled = false, isLink, ...rest }: ButtonProps) => (
  <S.Button as={isLink ? 'a' : 'button'} {...rest} isFilled={isFilled} isLink={isLink} />
);

export default Button;
