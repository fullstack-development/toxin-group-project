import styled from 'styled-components';

import visuallyHidden from 'shared/styles/mixins/visually-hidden';

export const StyledCheckbox = styled.label`
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
`;

export const HiddenCheckbox = styled.input`
  ${visuallyHidden};
`;

export const Checkmark = styled.span`
  position: relative;
  height: 1.4286rem;
  width: 1.4286rem;
  border: 0.0714rem solid ${(props) => props.theme.typography.colorLight};
  border-radius: 0.2857rem;

  &:after {
    content: '';
    display: none;
    position: absolute;
    width: 0.2857rem;
    height: 0.4286rem;
    border-right: 0.1429rem solid;
    border-bottom: 0.1429rem solid;
    border-image: ${(props) => props.theme.colors.primaryGradient};
    border-image-slice: 1;
    left: 0.4429rem;
    top: 0.2857rem;
    transform: rotate(45deg);
  }

  ${HiddenCheckbox}:checked ~ &,
  ${StyledCheckbox}:hover ${HiddenCheckbox} ~ & {
    border: 0.0714rem solid ${(props) => props.theme.colors.primary};
  }

  ${HiddenCheckbox}:checked ~ &:after {
    display: block;
  }
`;

export const Label = styled.span`
  margin-left: 0.7143rem;
`;
