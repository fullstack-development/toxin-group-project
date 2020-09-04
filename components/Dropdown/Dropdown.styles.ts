import styled, { css } from 'styled-components';

const Dropdown = styled.div`
  ${(props) => {
    const {
      theme: {
        typography: {
          color,
        },
      },
    } = props;

    return css`
      position: relative;

      &:hover > button,
      &:focus > button {
        border: 0.0714rem solid ${color};
      }
    `;
  }}
`;

const Result = styled.button`
  ${(props) => {
    const {
      theme: {
        typography: {
          colorLight, fontName, color, colorDark,
        },
      },
    } = props;

    return css`
      width: 100%;
      padding: 0.9643rem;
      border-radius: 0.2857rem 0.2857rem 0 0;
      border: 0.0714rem solid ${colorLight};
      text-align: left;
      font: inherit;
      background-color: transparent;
      cursor: pointer;

      &::placeholder {
        font-family: ${fontName}, Arial, sans-serif;
        color: ${colorDark};
      }

      &:hover,
      &:focus {
        border: 0.0714rem solid ${color};
        outline: none;
      }
    `;
  }}
`;

const List = styled.div`
  ${(props) => {
    const {
      theme: {
        typography: {
          color,
        },
      },
    } = props;
    return css`
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      padding-bottom: 0.3571rem;
      transform: translate(0, 100%);
      border: 0.0714rem solid ${color};
      border-radius: 0 0 0.2857rem 0.2857rem;
      font-size: 0.8571rem;
      line-height: 1.0714rem;
      text-transform: uppercase;
      font-weight: 700;
    `;
  }}
`;

const Item = styled.div`
  ${() => css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3571rem 0.5rem 0.1429rem 0.9286rem;
    `}
`;

const Button = styled.button`
  ${(props) => {
    const {
      theme: {
        typography: {
          colorLight, color,
        },
      },
    } = props;

    return css`
      width: 2.1429rem;
      height: 2.1429rem;
      border: 0.0714rem solid ${colorLight};
      border-radius: 50%;
      background-color: transparent;
      font: inherit;
      color: ${color};
      cursor: pointer;

      &:disabled {
        opacity: 0.38
      }
    `;
  }}
`;

const Input = styled.input`
  ${(props) => {
    const {
      theme: {
        typography: {
          color,
        },
      },
    } = props;

    return css`
      max-width: 2.5rem;
      border: 0;
      font: inherit;
      text-align: center;
      color: ${color};

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        display: none;
      }
    `;
  }}
`;

const ItemTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  word-break: break-word;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;

export {
  Dropdown, Result, List, Item, Button, Input, ItemTitle, InputContainer,
};
