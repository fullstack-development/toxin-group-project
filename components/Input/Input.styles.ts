import styled, { css } from 'styled-components';
import MaskedInput from 'react-text-mask';

const Input = styled.div`
  width: 100%;
`;

const LabelText = styled.span`
  ${(props) => {
    const { theme: { typography } } = props;
    return css`
      display: block;
      font-weight: bold;
      font-size: 0.8571rem;
      color: ${typography.colorDarkest};
      text-transform: uppercase;
      margin-bottom: 0.3571rem;
    `;
  }}
`;

const MaskedField = styled(MaskedInput)`
  ${(props) => {
    const { theme: { typography } } = props;
    return css`
      width: 100%;
      border-radius: 0.2857rem;
      border: 0.0714rem solid ${typography.colorLight};
      padding: 0.9643rem;

      &::placeholder {
        font-family: ${typography.fontName}, Arial, sans-serif;
        color: ${typography.colorLight};
      }

      &:hover,
      &:focus {
        border: 0.0714rem solid ${typography.color};
        outline: none;

        ::placeholder {
          color: ${typography.colorDark};
        }
      }
    `;
  }}
`;

const Field = styled.input`
  ${(props) => {
    const { theme: { typography } } = props;
    return css`
      width: 100%;
      border-radius: 0.2857rem;
      border: 0.0714rem solid ${typography.colorLight};
      padding: 0.9643rem;

      &::placeholder {
        font-family: ${typography.fontName}, Arial, sans-serif;
        color: ${typography.colorLight};
      }

      &:hover,
      &:focus {
        border: 0.0714rem solid ${typography.color};
        outline: none;

        ::placeholder {
          color: ${typography.colorDark};
        }
      }
    `;
  }}
`;

const ErrorMessage = styled.div`
  ${(props) => {
    const { theme: { error } } = props;
    return css`
      height: ${error.fontSize};
      font-size: ${error.fontSize};
      color: ${error.color};
    `;
  }}
`;

export {
  Input, LabelText, MaskedField, Field, ErrorMessage,
};
