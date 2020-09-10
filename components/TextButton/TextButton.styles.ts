import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface TextButtonProps {
  isSecondary: boolean;
}

const TextButton = styled.button<TextButtonProps>`
  ${(props) => {
    const { colors, typography } = props.theme;
    const { isSecondary } = props;

    return css`
      text-transform: uppercase;
      font: inherit;
      font: 700 0.8571rem ${typography.fontName};
      background-color: transparent;
      border: 0;
      cursor: pointer;
      text-decoration: none;
      color: ${isSecondary ? colors.basic : colors.primary};

      &:hover {
        color: ${darken(0.1, colors.primary)};
      }
    `;
  }}
`;

export { TextButton };
