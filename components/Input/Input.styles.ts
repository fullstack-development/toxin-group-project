import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

export const StyledInput = styled.div`
  width: 100%;
`;

export const LabelText = styled.p`
  font-weight: bold;
  font-size: 0.8571rem;
  color: ${(props) => props.theme.typography.colorDarkest};
  text-transform: uppercase;
  margin-bottom: 0.3571rem;
`;

export const MaskedField = styled(MaskedInput)`
  width: 100%;
  border-radius: 0.2857rem;
  border: 0.0714rem solid ${(props) => props.theme.typography.colorLight};
  padding: 0.9643rem;

  &::placeholder {
    font-family: ${(props) => props.theme.typography.fontName}, Arial, sans-serif;
    color: ${(props) => props.theme.typography.colorLight};
  }

  &:hover,
  &:focus {
    border: 0.0714rem solid ${(props) => props.theme.typography.color};
    outline: none;

    ::placeholder {
      color: ${(props) => props.theme.typography.colorDark};
    }
  }
`;

export const Field = styled.input`
  width: 100%;
  border-radius: 0.2857rem;
  border: 0.0714rem solid ${(props) => props.theme.typography.colorLight};
  padding: 0.9643rem;

  &::placeholder {
    font-family: ${(props) => props.theme.typography.fontName}, Arial, sans-serif;
    color: ${(props) => props.theme.typography.colorLight};
  }

  &:hover,
  &:focus {
    border: 0.0714rem solid ${(props) => props.theme.typography.color};
    outline: none;

    ::placeholder {
      color: ${(props) => props.theme.typography.colorDark};
    }
  }
`;

export const ErrorMessage = styled.div`
  height: 0.4286rem;
  font-size: ${(props) => props.theme.error.fontSize};
  color: ${(props) => props.theme.error.color};
`;
