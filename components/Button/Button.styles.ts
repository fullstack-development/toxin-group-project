import styled, { css } from 'styled-components';

type ButtonProps = {
  isFilled: boolean;
};

const Button = styled.button<ButtonProps>`
  ${(props) => {
    const { gradients, colors } = props.theme;
    const { isFilled } = props;
    return css`
      position: relative;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.0714rem 1.1428rem 1rem 1.2143rem;
      white-space: nowrap;
      text-align: center;
      background-color: transparent;
      border: 0;
      z-index: 1;
      border-radius: 1.5714rem;
      font-family: "Montserrat";
      background-image: ${gradients.primary};
      ${isFilled
    ? css`
          color: ${colors.defaultBackground};
        `
    : css`
          color: ${colors.primary};
      `}
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
      outline: 0;
      overflow: hidden;
      cursor: pointer;

      ${!isFilled && css`
        &::before {
          content: "";
          position: absolute;
          z-index: -1;
          background-color: ${colors.defaultBackground};
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: calc(100% - 0.2857rem);
          width: calc(100% - 0.2857rem);
          border-radius: 1.5714rem;
        }
      `}

      &:hover,
      &:focus {
        background-image: ${gradients.primaryLight};
      }
    `;
  }}
`;

export { Button };
