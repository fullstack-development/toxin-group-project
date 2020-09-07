import styled, { css } from 'styled-components';

const TextButton = styled.button`
${(props) => {
    const { colors: { primary }, typography: { color } } = props.theme;
    return css`
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      background-color: transparent;
      border: 0;
      cursor: pointer;
      text-decoration: none;
      color: ${primary};

      &:hover,
      &:focus {
        color: ${color};
      }
    `;
  }}
`;

export { TextButton };
