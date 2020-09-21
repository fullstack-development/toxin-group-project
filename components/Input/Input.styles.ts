import MaskedInput from 'react-text-mask';
import styled, { css } from 'styled-components';

const Input = styled.div`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      position: relative;
      margin-bottom: 20px;
      width: 100%;
      font-family: ${typography.fontName};
    `;
  }}
`;

const LabelText = styled.span`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      display: inline-block;
      font-weight: bold;
      font-size: 0.8571rem;
      color: ${colors.basicDarkest};
      text-transform: uppercase;
      margin-bottom: 0.3571rem;
    `;
  }}
`;

const MaskedField = styled(MaskedInput)`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      width: 100%;
      border-radius: 0.2857rem;
      border: 0.0714rem solid ${colors.basicLight};
      padding: 0.9643rem;
      font-family: inherit;

      &::placeholder {
        color: ${colors.basicLight};
      }

      &:hover,
      &:focus {
        border: 0.0714rem solid ${colors.basic};
        outline: none;

        ::placeholder {
          color: ${colors.basicDark};
        }
      }
    `;
  }}
`;

const Field = styled.input`
  ${(props) => {
    const { colors, typography } = props.theme;
    return css`
      width: 100%;
      border-radius: 0.2857rem;
      border: 0.0714rem solid ${colors.basicLight};
      padding: 0.9643rem;
      font-family: inherit;

      &::placeholder {
        font-family: ${typography.fontName};
        color: ${colors.basicLight};
      }

      &:hover,
      &:focus {
        border: 0.0714rem solid ${colors.basic};
        outline: none;

        ::placeholder {
          color: ${colors.basicDark};
        }
      }
    `;
  }}
`;

const ErrorMessage = styled.p`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      position: absolute;
      height: 0.8571rem;
      font-size: 0.8571rem;
      color: ${colors.error};
    `;
  }}
`;

export { Input, LabelText, MaskedField, Field, ErrorMessage };
