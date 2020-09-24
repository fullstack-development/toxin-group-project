import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  ${titles.h3()}
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      max-width: 18.5714rem;
      margin-bottom: 1.4286rem;
      color: ${colors.basicDark};
      line-height: 1.7143rem;
    `;
  }}
`;

const FieldContainer = styled.div`
  max-width: 18.5714rem;
`;

export { Container, Title, Description, FieldContainer };
