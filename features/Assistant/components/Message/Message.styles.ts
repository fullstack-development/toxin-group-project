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

const Message = styled.p<Message>`
  ${(props) => {
    const { colors } = props.theme;
    const { type } = props;

    return css`
      background: ${type === 'from' ? colors.secondary : colors.basicLightest};
      padding: 0.5rem;
      width: fit-content;
      border-radius: 0.5rem;
      word-break: break-all;
      color: ${type === 'to' ? 'black' : 'white'};
    `;
  }}
`;

export { Container, Author, Message };
