import Link from 'next/link';

import { NavItemProps } from '../FooterNav.types';
import * as S from './NavItem.styles';

const NavItem: React.FC<NavItemProps> = ({ title, items }: NavItemProps) => (
  <S.Container>
    {title && <S.Title>{title}</S.Title>}
    <S.List>
      {items &&
        items.map(({ text, href }) => (
          <Link href={href} passHref key={text}>
            <S.Link>{text}</S.Link>
          </Link>
        ))}
    </S.List>
  </S.Container>
);

export default NavItem;
