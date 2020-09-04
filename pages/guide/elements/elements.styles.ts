import styled from 'styled-components';

const Container = styled.div`
  padding: 3rem;
`;

const InputWrapper = styled.div`
  width: 22.8571rem;
  margin: 1rem 0;
`;

const ErrorMessage = styled.div`
  font-size: ${(props) => props.theme.error.fontSize};
  color: ${(props) => props.theme.error.color};
`;

const CheckboxWrapper = styled.div`
  margin: 1rem 0;
`;

export {
  Container, InputWrapper, ErrorMessage, CheckboxWrapper,
};
