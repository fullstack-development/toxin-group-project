import styled from 'styled-components';

const StyledInput = styled.input`
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

export default StyledInput;
