import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  isFilled = false,
  isFlat = false,
  isLink,
  ...rest
}: ButtonProps) => (
  <S.Button
    as={isLink ? 'a' : 'button'}
    {...rest}
    isFlat={isFlat}
    isFilled={isFilled}
    isLink={isLink}
  />
);

export default Button;
