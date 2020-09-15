import styled, { css } from 'styled-components';

const Type = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto minmax(auto, 24rem);
  grid-gap: 3.571rem 2.143rem;
`;

const Title = styled.div`
  ${(props: { fontSize: string}) => {
    const { fontSize } = props;
    return css`
      font-size: ${fontSize};
      text-align: right;
    `;
  }}
`;

const Example = styled.div`
  ${(props: { type: string, fontSize: string }) => {
    const { type, fontSize } = props;
    return css`
      font-weight: ${type === 'Body' ? 'normal' : 'bold'};
      line-height: ${type === 'Body' ? '1.65' : '1.27'};
      font-size: ${fontSize};
      font-family: ${type === 'H3' || type === 'Body' ? 'Montserrat' : 'Quicksand'}, Arial, sans-serif;
      text-transform: ${type === 'H3' ? 'uppercase' : 'none'};
    `;
  }}
`;

export {
  Type,
  Title,
  Example,
};
