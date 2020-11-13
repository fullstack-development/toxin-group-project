import Link from 'next/link';
import { memo } from 'react';

import * as S from './Button.styles';
import { Props } from './Button.types';

const Button = memo(
  ({ isFilled = false, isFlat = false, isDisabled = false, href, ...rest }: Props) =>
    href ? (
      <Link href={href} passHref>
        <S.Button as="a" {...rest} isFlat={isFlat} isFilled={isFilled} isDisabled={isDisabled} />
      </Link>
    ) : (
      <S.Button as="button" {...rest} isFlat={isFlat} isFilled={isFilled} isDisabled={isDisabled} />
    ),
);

export default Button;
