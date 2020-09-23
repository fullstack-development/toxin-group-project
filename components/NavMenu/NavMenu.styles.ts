import ExpandMore from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';

type Link = {
  isActive?: boolean;
  withSubMenu?: boolean;
  onMouseOver?: () => void;
};

type SubMenu = {
  isShow: boolean;
};

const NavContainer = styled.nav`
  display: flex;
`;

const Link = styled.a<Link>`
  ${(props) => {
    const { colors } = props.theme;
    const { isActive, withSubMenu } = props;

    return css`
      color: ${colors.basic};
      font-weight: ${isActive ? 'bold' : 'normal'};
      text-decoration: none;
      outline: none;
      margin-right: ${withSubMenu ? '3.2rem' : '1.5rem'};
      position: relative;
    `;
  }}
`;

const SubMenuLink = styled(Link)`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      margin: 0;
      border-bottom: 1px solid ${colors.primary};
      padding: 0.5rem;
      transition: all 0.1s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    `;
  }}
`;

const ExpandIcon = styled(ExpandMore)`
  width: 2rem;
  position: absolute;
`;

const SubMenuContainer = styled.div<SubMenu>`
  ${(props) => {
    const { isShow } = props;

    return css`
      display: ${isShow ? 'flex' : 'none'};
      flex-direction: column;
      width: max-content;
      max-width: 11rem;
      text-align: center;
      position: absolute;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, 0);
    `;
  }}
`;

export { NavContainer, Link, SubMenuLink, ExpandIcon, SubMenuContainer };
