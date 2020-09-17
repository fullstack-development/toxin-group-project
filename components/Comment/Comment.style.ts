import styled, { css } from 'styled-components';

const Container = styled.div``;

const LeftWrapper = styled.div`
  margin: 0 1rem 0 0.4rem;
`;

const Avatar = styled.img`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      float: left;
      max-width: 3.4rem;
      border-radius: 50%;
      border: 0.15rem solid ${colors.defaultBackground};
      box-shadow: 0 0.7143rem 1.4286rem ${colors.basicLightest};
    `;
  }}
`;

const User = styled.p`
  font-weight: bold;
  padding: 0.3rem 0 0 4.1rem;
`;

const Date = styled.p`
  padding: 0.5rem 0 0 4.1rem;
`;

const UserDataWrapper = styled.div`
`;

const MessageWrapper = styled.div`
  display: flex;
  margin-top: 1.1rem;
`;

const Text = styled.p`
  line-height: 1.7rem;
`;

export {
  Container,
  LeftWrapper,
  Avatar,
  User,
  Date,
  UserDataWrapper,
  MessageWrapper,
  Text,
};
