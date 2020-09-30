import Slider from '@material-ui/core/Slider';
import styled, { css } from 'styled-components';

const RangeSlider = styled(Slider)`
  ${(props) => {
    const { colors, gradients } = props.theme;
    return css`
      & .MuiSlider-rail {
        height: 6px;
        background: white;
        border: 1px solid ${colors.basicLight};
        border-radius: 3px;
      }

      & .MuiSlider-thumb {
        width: 16px;
        height: 16px;
        background: ${colors.secondary} ${gradients.secondary};
        border: 2px solid white;
        box-shadow: none;
        outline: none;
        &:focus, &:hover {
          box-shadow: none;
        },
      }

      & .MuiSlider-track {
        height: 6px;
        background: ${colors.secondary} ${gradients.secondary};
      }
    `;
  }}
`;

export { RangeSlider };
