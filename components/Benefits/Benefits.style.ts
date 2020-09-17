import styled, { css } from 'styled-components';

import { materialIcons } from 'shared/styles/mixins';

const Benefits = styled.div``;

type Icon = {
  icon: string;
}

const BenefitItem = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      border-bottom: 0.01rem solid ${colors.basicLight};
      padding: 1.4rem 0;
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
    const { gradients } = props.theme;
    const { icon } = props;

    return css`
      font-size: 3.45rem;
      background: ${gradients.primary};
      ${materialIcons};

      &:before {
        content: '${icon}';
      }
    `;
  }}
`;

const Title = styled.h3`
  font-size: 1rem;
  line-height: 2rem;
  word-break: break-word;
`;

const Description = styled.p``;

export {
  Benefits,
  BenefitItem,
  TextWrapper,
  Icon,
  Title,
  Description,
};
