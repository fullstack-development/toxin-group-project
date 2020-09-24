import styled, { css } from 'styled-components';

const Title = styled.h3`
  ${(props) => {
    const { typography, colors } = props.theme;
    return css`
      margin-bottom: 1.5rem;
      font: 700 0.8571rem ${typography.fontName};
      color: ${colors.basicDarkest};
      text-transform: uppercase;
    `;
  }}
`;

const Link = styled.a`
  ${(props) => {
    const { typography, colors } = props.theme;
    return css`
      display: inline-block;
      width: max-content;
      font-family: ${typography.fontName};
      line-height: 1.2143rem;
      color: ${colors.basic};
      text-decoration: none;
      text-transform: lowercase;

      &:not(:last-child) {
        margin-bottom: 1.4286rem;
      }

      &::first-letter {
        text-transform: uppercase;
      }

      &:hover,
      &:focus {
        color: ${colors.basicDarkest};
      }
    `;
  }}
`;

const Container = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export { Title, Link, Container, List };
