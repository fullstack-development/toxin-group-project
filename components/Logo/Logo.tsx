import Link from 'next/link';
import { memo } from 'react';

import { Toxin } from 'public/img/svg';

import * as S from './Logo.styles';
import { Props } from './Logo.types';

const Logo = memo(({ ...rest }: Props) => (
  <Link href="/" passHref>
    <S.LogoContainer {...rest}>
      <S.Logo />
      <Toxin />
    </S.LogoContainer>
  </Link>
));

Logo.displayName = 'Logo';

export default Logo;
