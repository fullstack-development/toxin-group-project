import styled, { css } from 'styled-components';

const Color = styled.div`
  display: flex;
  align-items: center;
`;

const Palette = styled.div`
  ${(props: { color: string, opacity: number }) => {
    const { color, opacity } = props;
    return css`
      width: 5rem;
      height: 5rem;
      border-radius: .4285rem;
      background: ${color};
      opacity: ${opacity};
      flex-shrink: 0;
    `;
  }}
`;

const Description = styled.div`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      color: ${colors.basicDarkest};
      font-family: Quicksand, 'Open Sans', sans-serif;
      font-size: 1.357rem;
      padding-left: 2.8571rem;
      line-height: 1.5;
    `;
  }}
`;

const Title = styled.div`
  font-weight: bold;
`;

export {
  Color,
  Palette,
  Description,
  Title,
};
