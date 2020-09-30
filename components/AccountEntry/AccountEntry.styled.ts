import styled from 'styled-components';

import { titles } from 'shared/styles/mixins';

const AccountEntry = styled.section`
  max-width: 27.1429rem;
  min-width: 21.4286rem;
  box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
  padding: 2.75rem 2rem 2rem 2.05rem;
  border: 0.0714rem solid rgba(0, 0, 0, 0.12);
  border-radius: 0.2857rem;
`;

const Title = styled.h1`
  ${titles.h1}
  font-size: 1.7143rem;
  line-height: 1.25;
  margin-bottom: 1.3214rem;

  @media (max-width: 460px) {
    font-size: 1.5rem;
  }
`;

const ToRegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

const FieldsWrapper = styled.div`
  & > div:nth-child(1) {
    padding-bottom: 0.7rem;
  }

  & > div:nth-child(2) {
    padding-bottom: 1.4rem;
  }
`;

export { AccountEntry, Title, ToRegisterWrapper, FieldsWrapper };
