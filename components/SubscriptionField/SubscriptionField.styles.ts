import styled, { css } from 'styled-components';

import BasicInput from 'components/Input/Input';
import { materialIcons } from 'shared/styles/mixins';

const Input = styled(BasicInput)`
  padding-right: 2.5rem;
`;

const SubmitButton = styled.button`
  ${(props) => {
    const { gradients } = props.theme;
    return css`
      position: absolute;
      height: 100%;
      right: 0;
      top: 0;
      font-size: 1.7143rem;
      line-height: 1.7143rem;
      background: ${gradients.primary};
      ${materialIcons}
      padding: 0 0.5714rem;
      border: none;
      cursor: pointer;

      &::before {
        content: 'arrow_forward';
      }
    `;
  }}
`;

const InputContainer = styled.div`
  position: relative;
`;

export { SubmitButton, InputContainer, Input };
