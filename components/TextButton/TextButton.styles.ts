import styled, { css } from 'styled-components';
import { darken } from 'polished';

const TextButton = styled.button`
  ${(props) => {
    const { colors: { primary }, typography: { fontName } } = props.theme;
    return css`
      text-transform: uppercase;
      font: inherit;
      font: 700 0.8571rem  ${fontName};
      font-weight: 700;
      background-color: transparent;
      border: 0;
      cursor: pointer;
      text-decoration: none;
      color: ${primary};

      &:hover {
        color: ${darken(0.1, primary)};
      }
    `;
  }}
`;

const SecondaryTextButton = styled(TextButton)`
  ${(props) => {
    const { typography: { color } } = props.theme;
    return css`
      color: ${color};
    `;
  }}
`;

export { TextButton, SecondaryTextButton };
