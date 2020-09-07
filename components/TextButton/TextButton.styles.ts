import styled, { css } from 'styled-components';

const TextButton = styled.button`
${(props) => {
    const { colors: { primary } } = props.theme;
    return css`
      text-transform: uppercase;
      font-weight: 700;
      color: ${primary}
    `;
  }}
`;

const TextLink = styled.a`

`;

export { TextButton, TextLink };
