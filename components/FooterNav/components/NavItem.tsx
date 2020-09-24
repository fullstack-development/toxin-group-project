import { NavItemProps } from '../FooterNav.types';
import * as S from './NavItem.styles';

const NavItem: React.FC<NavItemProps> = ({ title, items }: NavItemProps) => {
  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}
      <S.List>
        {items &&
          items.map(({ text, href }) => (
            <S.Link key={text} href={href}>
              {text}
            </S.Link>
          ))}
      </S.List>
    </S.Container>
  );
};

export default NavItem;
