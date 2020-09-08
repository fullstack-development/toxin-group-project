import styled, { css } from 'styled-components';

const Button = styled.button`
  ${(props) => {
    const { theme } = props;
    return css`
      position: relative;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.0714rem 0.5714rem 1rem 0.5714rem;
      white-space: nowrap;
      text-align: center;
      background-color: transparent;
      border: 0;
      border-radius: 1.5714rem;
      font-family: 'Montserrat';
      /* TO DO */
      background-image: linear-gradient(180deg, violet 0%, darkviolet 100%);
      /* TO DO */
      color: white;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
      outline: 0;
      cursor: pointer;

      &:hover,
      &:focus {
        opacity: 0.5;
      }
    `;
  }}
`;

const SecondaryButton = styled(Button)`
  z-index: 1;
  color: purple;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    /* TO DO */
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(100% - 0.2857rem);
    width: calc(100% - 0.2857rem);
    border-radius: 1.5714rem;
  }
`;

export { Button, SecondaryButton };
