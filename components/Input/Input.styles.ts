import styled, { css } from 'styled-components';
import MaskedInput from 'react-text-mask';

export const Input = styled.div`
  width: 100%;
`;

export const LabelText = styled.p`
  ${(props) => {
    const { theme: { typography } } = props;
    return css`
      font-weight: bold;
      font-size: 0.8571rem;
      color: ${typography.colorDarkest};
      text-transform: uppercase;
      margin-bottom: 0.3571rem;
    `;
  }}
`;

export const MaskedField = styled(MaskedInput)`
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

export const Field = styled.input`
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

export const ErrorMessage = styled.div`
  ${(props) => {
    const { theme: { error } } = props;
    return css`
      height: 0.4286rem;
      font-size: ${error.fontSize};
      color: ${error.color};
    `;
  }}
`;
