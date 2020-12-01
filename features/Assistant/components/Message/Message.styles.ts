import styled, { css } from 'styled-components';

type Message = {
  type: 'from' | 'to';
};

const Container = styled.div<Message>`
  ${(props) => {
    const { type } = props;

    return css`
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: ${type === 'from' ? 'flex-end' : 'flex-start'};
    `;
  }}
`;

const Author = styled.span``;

const Message = styled.div<Message>`
  ${(props) => {
    const { colors } = props.theme;
    const { type } = props;

    return css`
      background: ${type === 'from' ? colors.secondary : colors.basicLightest};
      margin: 0.5rem 0;
      width: fit-content;
      border-radius: 0.5rem;
      color: ${type === 'to' ? 'black' : 'white'};
    `;
  }}
`;

const MessageElement = styled.div`
  margin: 1rem;
`;

export { Container, Author, Message, MessageElement };
