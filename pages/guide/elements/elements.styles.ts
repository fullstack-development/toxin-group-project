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

const BulletListWrapper = styled.div`
  max-width: 18.5714rem;
`;

export {
  Container, InputWrapper, ErrorMessage, BulletListWrapper,
};
