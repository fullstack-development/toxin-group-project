import ExpandMore from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';

type SubMenu = {
  isShown: boolean;
};

type Link = {
  isActive?: boolean;
  withSubMenu?: boolean;
};

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
    const { isShown } = props;

    return css`
      display: ${isShown ? 'flex' : 'none'};
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

const ExpandIcon = styled(ExpandMore)`
  width: 2rem;
  position: absolute;
`;

export { Link, SubMenuLink, SubMenuContainer, ExpandIcon };
