import styled, { css } from 'styled-components';

type Container = {
  isShownMenu: boolean;
};

type MenuItem = {
  isActive?: boolean;
};

const Container = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      position: relative;
      cursor: pointer;
      margin-right: 1rem;
      padding: 0 1rem;
      border-left: 1px solid ${colors.basicLight};
      border-right: 1px solid ${colors.basicLight};
    `;
  }}
`;

const MenuContainer = styled.div<Container>`
  ${(props) => {
    const { isShownMenu } = props;

    return css`
      padding: 1.5rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      background: white;
      display: ${isShownMenu ? 'block' : 'none'};
    `;
  }}
`;

const MenuItem = styled.div<MenuItem>`
  ${(props) => {
    const { colors } = props.theme;
    const { isActive } = props;

    return css`
      margin: 0;
      padding: 0.5rem;
      border-bottom: 0.2rem solid ${colors.primary};
      transition: all 0.1s ease-in-out;
      color: ${colors.basic};
      font-weight: ${isActive ? 'bold' : 'normal'};

      &:hover {
        transform: scale(1.1);
      }
    `;
  }}
`;

export { Container, MenuContainer, MenuItem };
