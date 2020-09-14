import styled, { css } from 'styled-components';

import visuallyHidden from 'shared/styles/mixins/visually-hidden';

const Checkbox = styled.label`
  display: inline-flex;
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input`
  ${visuallyHidden};
`;

const Checkmark = styled.span`
  ${(props) => {
    const { colors, gradients } = props.theme;
    return css`
      position: relative;
      height: 1.4286rem;
      width: 1.4286rem;
      border: 0.0714rem solid ${colors.basicLight};
      border-radius: 0.2857rem;
      flex-shrink: 0;

      &:after {
        content: '';
        display: none;
        position: absolute;
        width: 0.2857rem;
        height: 0.4286rem;
        border-right: 0.1429rem solid;
        border-bottom: 0.1429rem solid;
        border-image: ${gradients.primary};
        border-image-slice: 1;
        left: 0.4429rem;
        top: 0.3rem;
        transform: rotate(45deg);
      }

      ${HiddenCheckbox}:checked ~ &,
      ${Checkbox}:hover ${HiddenCheckbox} ~ & {
        border: 0.0714rem solid ${colors.primary};
      }

      ${HiddenCheckbox}:checked ~ &:after {
        display: block;
      }
    `;
  }}
`;

const Label = styled.span`
  margin: auto 0 auto 0.7143rem;
  line-height: 1.38;
`;

export {
  Checkbox, HiddenCheckbox, Checkmark, Label,
};
