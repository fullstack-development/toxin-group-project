import styled, { css } from 'styled-components';

const Type = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto minmax(auto, 24rem);
  grid-gap: 3.571rem 2.143rem;
`;

const Title = styled.div`
  ${(props: { fontSize: string , theme}) => {
    const { fontSize } = props;
    const { colors } = props.theme;
    return css`
      font-size: ${fontSize};
      text-align: right;
      color: ${colors.basicLight};
    `;
  }}
`;

const Example = styled.div`
  ${(props: { type: string, fontSize: string, theme }) => {
    const { type, fontSize } = props;
    const { colors } = props.theme;
    return css`
      font-weight: ${type === 'Body' ? 'normal' : 'bold'};
      line-height: ${type === 'Body' ? '1.65' : '1.27'};
      font-size: ${fontSize};
      font-family: ${type === 'H3' || type === 'Body' ? 'Montserrat' : 'Quicksand'}, Arial, sans-serif;
      text-transform: ${type === 'H3' ? 'uppercase' : 'none'};
      color: ${colors.basicDarkest};
    `;
  }}
`;

export {
  Type,
  Title,
  Example,
};
