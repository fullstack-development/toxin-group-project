import Link from 'next/link';

import { Props } from './Button.model';
import * as S from './Button.styles';

const Button: React.FC<Props> = ({
  isFilled = false,
  isFlat = false,
  isDisabled = false,
  href,
  ...rest
}: Props) =>
  href ? (
    <Link href={href} passHref>
      <S.Button as="a" {...rest} isFlat={isFlat} isFilled={isFilled} isDisabled={isDisabled} />
    </Link>
  ) : (
    <S.Button as="button" {...rest} isFlat={isFlat} isFilled={isFilled} isDisabled={isDisabled} />
  );

export default Button;
