import styled, { css } from 'styled-components';

const Expander = styled.div`
  width: 18.1071rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 0.8571rem;
  text-transform: uppercase;
`;

const Content = styled.div`
  ${(props: { isOpen: boolean }) => {
    const { isOpen } = props;
    return css`
      height: ${(isOpen ? 'auto' : '0')};
      visibility: ${(isOpen ? 'visible' : 'hidden')};
      opacity: ${(isOpen ? '1' : '0')};
      transition: opacity .4s;
      overflow: hidden;
      padding: 0.2143rem 0;
    `;
  }}
`;

export {
  Expander, Header, Title, Content,
};
