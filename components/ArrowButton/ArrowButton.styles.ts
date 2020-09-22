import styled, { css } from 'styled-components';

import Button from 'components/Button/Button';
import { materialIcons } from 'shared/styles/mixins';

const ArrowButton = styled.div`
  width: 100%;
  position: relative;
`;

const BasicButton = styled(Button)`
  width: 100%;
`;

const ArrowIcon = styled.span`
  ${() => {
    return css`
      ${materialIcons}
      background-color: white;
      font-size: 1.7rem;
      position: absolute;
      right: 0.73rem;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 10;

      &::before {
        content: 'arrow_forward';
      }
    `;
  }}
`;

export { ArrowButton, BasicButton, ArrowIcon };
