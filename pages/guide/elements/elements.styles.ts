import styled from 'styled-components';

const Container = styled.div`
  padding: 3rem;
`;

const InputWrapper = styled.div`
  width: 22.8571rem;
  margin-bottom: 0.45rem;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 2.1429rem;
`;

const DropdownWrapper = styled.div`
  width: 18.9286rem;
  margin-bottom: 1.4286rem;
`;

const TextButtonWrapper = styled.span`
  margin-right: 1.4286rem;
`;

const CheckboxWrapper = styled.div`
  width: 15.8571rem;
  margin-bottom: 0.45rem;
`;

const ErrorMessage = styled.div`
  font-size: ${(props) => props.theme.error.fontSize};
  color: ${(props) => props.theme.error.color};
`;

const BulletListWrapper = styled.div`
  max-width: 18.5714rem;
`;

export {
  Container,
  ButtonWrapper,
  TextButtonWrapper,
  InputWrapper,
  ErrorMessage,
  CheckboxWrapper,
  BulletListWrapper,
  DropdownWrapper,
};
