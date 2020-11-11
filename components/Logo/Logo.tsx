import Link from 'next/link';

import { Toxin } from 'public/img/svg';

import { Props } from './Logo.model';
import * as S from './Logo.styles';

const Logo: React.FC<Props> = ({ ...rest }: Props) => (
  <Link href="/" passHref>
    <S.LogoContainer {...rest}>
      <S.Logo />
      <Toxin />
    </S.LogoContainer>
  </Link>
);
export default Logo;
