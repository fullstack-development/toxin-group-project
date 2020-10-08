import styled from 'styled-components';

const Container = styled.div`
  background: url('./img/auth-register.jpg') bottom / cover no-repeat;
  min-height: 40rem;
  padding: 1.25rem;

  & > form {
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    min-height: 30rem;
    padding: 1rem;
  }

  @media (max-width: 992px) {
    min-height: 20rem;
  }

  @media (max-width: 576px) {
    min-height: 10rem;
    padding: 0.7rem;
  }
`;

export { Container };
