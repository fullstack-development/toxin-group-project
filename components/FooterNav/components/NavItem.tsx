import Link from 'next/link';
import { memo } from 'react';

import { NavItemProps } from '../FooterNav.types';
import * as S from './NavItem.styles';

const NavItem = memo(({ title, items }: NavItemProps) => (
  <S.Container>
    {title && <S.Title>{title}</S.Title>}
    <S.List>
      {items &&
        items.map(({ text, href }) => (
          <S.Item key={text}>
            <Link href={href} passHref>
              <S.Link>{text}</S.Link>
            </Link>
          </S.Item>
        ))}
    </S.List>
  </S.Container>
));

NavItem.displayName = 'NavItem';

export default NavItem;
