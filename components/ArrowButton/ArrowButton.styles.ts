import styled, { css } from 'styled-components';

import Button from 'components/Button/Button';
import { materialIcons } from 'shared/styles/mixins';

const ArrowButton = styled.div`
  width: 100%;
  position: relative;
`;

const BasicButton = styled(Button)`
  ${(props) => {
    const { gradients } = props.theme;
    return css`
      width: 100%;
      padding-right: 2.4571rem;
      padding-left: 2.4571rem;

      ${ArrowButton}:hover & {
        background-image: ${gradients.primaryLight};
      }
    `;
  }}
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
      transform: translateY(-50%);
      z-index: 1;
      pointer-events: none;
      cursor: pointer;

      &::before {
        content: 'arrow_forward';
      }
    `;
  }}
`;

export { ArrowButton, BasicButton, ArrowIcon };
