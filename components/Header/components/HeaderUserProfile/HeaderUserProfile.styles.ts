import styled, { css } from 'styled-components';

import { Link } from 'components/NavMenu/components/NavLink.styles';
import { ListItem } from 'components/NavMenu/NavMenu.styles';
import { breakpointDown } from 'shared/styles/break-points';

const HeaderUserProfile = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      width: max-content;
      padding-left: 1.4rem;
      border-left: 0.0714rem solid ${colors.basicLightest};

      & ${ListItem} > div > ${Link} {
        width: 11.5rem;
        height: 2.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      @media ${breakpointDown('md')} {
        width: 100%;
        border-left: none;
        padding: 1.4286rem 0;
        border-top: 0.0714rem solid ${colors.basicLightest};
      }
    `;
  }}
`;

const UserName = styled.span`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      color: ${colors.basic};
      margin-right: 1.5rem;
      position: relative;
      margin: 0;
      cursor: pointer;

      &:hover {
        color: ${colors.basicDarkest};
      }
    `;
  }}
`;

export { HeaderUserProfile, UserName };
