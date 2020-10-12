import styled, { css } from 'styled-components';

const HeaderUserProfile = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      width: max-content;
      padding-left: 1.4rem;
      border-left: 0.0714rem solid ${colors.basicLightest};

      @media (max-width: 1050px) {
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
      user-select: none;

      &:hover {
        color: ${colors.basicDarkest};
      }
    `;
  }}
`;

export { HeaderUserProfile, UserName };
