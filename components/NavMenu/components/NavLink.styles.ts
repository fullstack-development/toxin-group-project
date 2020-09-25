import ExpandMore from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';

type SubMenu = {
  isShown?: boolean;
};

type Link = {
  isActive?: boolean;
};

const NavLink = styled.div`
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gainsboro;
    padding: 0.6rem;
    border-radius: 8px;
    flex-direction: column;

    & > svg {
      height: 3rem;
      width: 3rem;
    }
  }
`;

const Link = styled.a<Link>`
  ${(props) => {
    const { colors } = props.theme;
    const { isActive } = props;

    return css`
      color: ${colors.basic};
      font-weight: ${isActive ? 'bold' : 'normal'};
      text-decoration: none;
      outline: none;
      margin-right: 1.5rem;
      position: relative;
    `;
  }}
`;

const SubMenuLink = styled(Link)`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      margin: 0;
      padding: 0.5rem;
      border-bottom: 0.2rem solid ${colors.primary};
      transition: all 0.1s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    `;
  }}
`;

const SubMenuContainer = styled.div<SubMenu>`
  ${(props) => {
    const { colors } = props.theme;
    const { isShown } = props;

    return css`
      display: ${isShown ? 'flex' : 'none'};
      background: ${colors.defaultBackground};
      z-index: 10;
      flex-direction: column;
      width: max-content;
      max-width: 11rem;
      text-align: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      @media (max-width: 960px) {
        position: relative;
        transform: translate(0);
        left: 0;
      }
    `;
  }}
`;

const ExpandIcon = styled(ExpandMore)<SubMenu>`
  width: 2rem;
  position: absolute;
  right: 0;
  cursor: pointer;

  @media (max-width: 960px) {
    top: 0;
  }
`;

export { NavLink, Link, SubMenuLink, SubMenuContainer, ExpandIcon };
