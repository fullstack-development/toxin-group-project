import styled, { css } from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  ${(props) => {
    const { theme: { typography: { colorLight, colorDark } } } = props;
    return css`
      position: relative;
      margin: 0 0 0.7143rem;
      padding-left: 1.4286rem;
      line-height: 1.7143rem;
      color: ${colorDark}

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.5rem;
        width: 0.7143rem;
        height: 0.7143rem;
        background-color: ${colorLight};
        border-radius: 50%;
      }
    `;
  }}
`;

export { List, Item };
