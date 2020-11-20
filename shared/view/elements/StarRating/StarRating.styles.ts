import styled, { css } from 'styled-components';

import { visuallyHidden, materialIcons } from 'shared/styles/mixins';

import { StarProps } from './StarRating.model';

const StarRating = styled.div`
  display: flex;
`;

const Title = styled.p`
  ${visuallyHidden}
`;

const Star = styled.div<StarProps>`
  ${(props) => {
    const { gradients } = props.theme;
    const { iconName } = props;

    return css`
      ${materialIcons}
      background-image: ${gradients.primary};
      font-size: 1.7rem;

      &:before {
        content: '${iconName}';
      }
    `;
  }}
`;

export { StarRating, Title, Star };
