import styled from 'styled-components';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { titles } from 'shared/styles/mixins';

const RegistrationForm = styled.div`
  max-width: 27.1429rem;
  box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
  padding: 3rem 2.1rem 2rem 2.1rem;

  & > div {
    padding: 0;
  }
`;

const Title = styled.h2`
  ${titles.h1()};
  margin-bottom: 1.4rem;
`;

const AlreadyRegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.3rem;
`;

const Col = styled.div``;

const InputWrapper = styled(Input)`
  margin-bottom: 0.6rem;
`;

const RadioButtonsWrapper = styled.div`
  display: flex;

  & > label {
    margin: 0.2rem 1.5rem 1.5rem 0;
  }
`;

const AccountEntryWrapper = styled.div`
  margin-top: 0.7rem;

  & > div {
    padding: 0;
  }
`;

const RegisterButton = styled(ArrowButton)`
  margin-top: 1.7rem;
  height: 3.1rem;
`;

const EntryButton = styled(Button)`
  width: 7rem;
  margin-left: 2.6rem;
`;

export {
  RegistrationForm,
  Title,
  AlreadyRegisterWrapper,
  Col,
  InputWrapper,
  RadioButtonsWrapper,
  AccountEntryWrapper,
  RegisterButton,
  EntryButton,
};
