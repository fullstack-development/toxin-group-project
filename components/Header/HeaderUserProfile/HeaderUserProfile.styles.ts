import styled, { css } from 'styled-components';

const HeaderUserProfile = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      width: max-content;
      padding-left: 1.4rem;
      border-left: 1px solid ${colors.basicLightest};

      @media (max-width: 900px) {
        border-left: none;
        border-top: 1px solid ${colors.basicLightest};
      }
    `;
  }}
`;

const Link = styled.a`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      color: ${colors.basic};
      text-decoration: none;
      outline: none;
      margin-right: 1.5rem;
      position: relative;
      margin: 0;

      &:hover {
        color: ${colors.basicDarkest};
      }
    `;
  }}
`;

export { HeaderUserProfile, Link };
