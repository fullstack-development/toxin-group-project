import styled, { css } from 'styled-components';

export const StyledExpander = styled.div`
  width: 18.1071rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 0.8571rem;
  text-transform: uppercase;
`;

export const Content = styled.div`
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
