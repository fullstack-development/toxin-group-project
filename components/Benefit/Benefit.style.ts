import styled, { css } from 'styled-components';
import { materialIcons } from 'shared/styles/mixins';

const Benefit = styled.div``;

type Icon = {
  icon: string;
}

const BenefitItem = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      border-bottom: 1px solid ${colors.basicLight};
      padding: 1.7rem 0;
      display: flex;
    `;
  }}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.8rem;
`;

const Icon = styled.span<Icon>`
  ${(props) => {
    const { icon } = props;

    return css`
      font-size: 3.45rem;
      width: 3.2rem;
      height: 3.2rem;
      background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
      ${materialIcons};

      &:before {
        display: block;
        content: '${'' + icon}';
      }
    `;
  }}
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0.2rem 0 0.5rem 0;
`;

const Description = styled.p``;

export {
  Benefit,
  BenefitItem,
  TextWrapper,
  Icon,
  Title,
  Description,
};
