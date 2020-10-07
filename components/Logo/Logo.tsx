import Link from 'next/link';

import { Toxin } from 'public/img/svg';

import * as S from './Logo.styles';
import { Props } from './Logo.types';

const Logo: React.FC<Props> = ({ ...rest }: Props) => (
  <Link href="/" passHref>
    <S.LogoContainer {...rest}>
      <S.Logo />
      <Toxin />
    </S.LogoContainer>
  </Link>
);
export default Logo;
