import styled, { css } from 'styled-components';

const Copyright = styled.p`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      margin: 0;
      color: ${colors.basicDark};
      line-height: 1.2143rem;

      @media (max-width: 900px) {
        margin-bottom: 1.7857rem;
      }
    `;
  }}
`;

export { Copyright };
