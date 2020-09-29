import styled, { css } from 'styled-components';

import { ImageProps } from '../../Room.types';

const Container = styled.div`
  position: relative;
  min-height: 10.7857rem;
`;

const Img = styled.img<ImageProps>`
  ${(props) => {
    const { isShown } = props;
    return css`
      position: absolute;
      opacity: 0;
      transition: 0.5s;
      user-select: none;

      ${isShown &&
      css`
        opacity: 1;
      `}
    `;
  }}
`;

const Dots = styled.ul`
  display: flex;
  position: absolute;
  right: 1.0714rem;
  bottom: 1.0714rem;
`;

const Dot = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-right: 0.2679rem;
  }
`;

export { Container, Img, Dots, Dot };
