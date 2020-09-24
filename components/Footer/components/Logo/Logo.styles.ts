import styled, { css } from 'styled-components';

const Container = styled.div`
  margin-right: 2.8571rem;
`;

const Description = styled.p`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      max-width: 18.5714rem;
      margin: 0;
      color: ${colors.basicDark};
      line-height: 1.7143rem;
    `;
  }}
`;

const ImgContainer = styled.div`
  margin-bottom: 1.4286rem;
`;

export { Container, Description, ImgContainer };
