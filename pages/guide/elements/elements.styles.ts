import styled from 'styled-components';

const Container = styled.div`
  padding: 3rem;
`;

const InputWrapper = styled.div`
  width: 22.8571rem;
  margin-bottom: 0.45rem;
`;

const ButtonWrapper = styled.div`
  max-width: 7.1429rem;
  margin-bottom: 1.4286rem;
`;

const ErrorMessage = styled.div`
  font-size: ${(props) => props.theme.error.fontSize};
  color: ${(props) => props.theme.error.color};
`;

const BulletListWrapper = styled.div`
  max-width: 18.5714rem;
`;

export {
  Container, InputWrapper, ErrorMessage, BulletListWrapper, ButtonWrapper,
};
