import Link from 'next/link';
import { memo } from 'react';

import { Toxin } from 'public/img/svg';

import * as S from './Logo.styles';
import { Props } from './Logo.types';

const Logo = memo((props: Props) => (
  <Link href="/" passHref>
    <S.LogoContainer {...props}>
      <S.Logo />
      <Toxin />
    </S.LogoContainer>
  </Link>
));

export default Logo;
