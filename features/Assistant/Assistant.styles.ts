import styled, { css } from 'styled-components';

const Assistant = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 6rem;
  width: 25rem;
  height: 40rem;
  background: white;
  z-index: 10;
  border-radius: 1rem;
  box-shadow: 0.1429rem 0.5714rem 0.3571rem 0.1429rem #00000021;
  border-top: 0.0714rem solid gainsboro;
  border-left: 0.0714rem solid gainsboro;
  display: flex;
  flex-direction: column;
`;

const MessagesArea = styled.div`
  flex: 6;
  padding: 1rem;
  overflow: hidden;
  overflow-y: scroll;
`;

export { Assistant, MessagesArea };
