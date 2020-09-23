import styled, { css } from 'styled-components';

import Input from 'components/Input/Input';
import { titles } from 'shared/styles/mixins';

const RegistrationForm = styled.div`
  ${(props) => {
    return css`
      max-width: 27.1429rem;
      box-shadow: 0px 0px 1.7857rem rgba(0, 0, 0, 0.2);
      padding: 2.8571rem 2.1429rem;

      & > div {
        padding: 0;
      }
    `;
  }}
`;

const Title = styled.h2`
  ${titles.h1()};
  letter-spacing: 0.1rem;
  margin-bottom: 1.4rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
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

export {
  RegistrationForm,
  Title,
  Row,
  Col,
  InputWrapper,
  RadioButtonsWrapper,
  AccountEntryWrapper,
};
