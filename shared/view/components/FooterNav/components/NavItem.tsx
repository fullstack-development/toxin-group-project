import Link from 'next/link';
import { withTranslation, WithTranslation } from 'react-i18next';

import { NavItemProps } from '../FooterNav.types';
import * as S from './NavItem.styles';

const NavItem: React.ComponentType<WithTranslation & NavItemProps> = ({
  title,
  items,
  t,
}: NavItemProps) => (
  <S.Container>
    {title && <S.Title>{t(`Links:${title}`)}</S.Title>}
    <S.List>
      {items &&
        items.map(({ text, href }) => (
          <S.Item key={text}>
            <Link href={href} passHref>
              <S.Link>{t(`Links:${text}`)}</S.Link>
            </Link>
          </S.Item>
        ))}
    </S.List>
  </S.Container>
);

export default withTranslation('Links')(NavItem);
