import styled, { css } from 'styled-components';

import { h3 } from 'shared/styles/mixins/title';

type ContentProps = {
  isOpen: boolean;
};

const Expander = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.h3`
  ${h3}
`;

const Content = styled.div<ContentProps>`
  ${(props) => {
    const { isOpen } = props;
    return css`
      height: ${(isOpen ? 'auto' : '0')};
      visibility: ${(isOpen ? 'visible' : 'hidden')};
      opacity: ${(isOpen ? '1' : '0')};
      transition: opacity .4s;
      overflow: hidden;
      padding: 1.1rem 0 0.2143rem;
    `;
  }}
`;

export {
  Expander,
  Header,
  Title,
  Content,
};
