import styled from 'styled-components';

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
  height: ${(props: {isOpen: boolean}) => ((props.isOpen) ? 'auto' : '0')};
  transition: height 1s;
  overflow: hidden;
  padding: 0.2143rem 0;
`;
