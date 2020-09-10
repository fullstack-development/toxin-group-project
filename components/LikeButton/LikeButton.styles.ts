import styled, { css } from 'styled-components';

type LikeSpan = {
  isActive: boolean;
}

const LikeInput = styled.input`
  width: 0;
`;

const LikeLabel = styled.label<LikeSpan>`
  ${(props) => {
    const { colors, gradients } = props.theme;
    const { isActive } = props;

    return css`
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 2.7rem;
      height: 1.3rem;
      border-radius: 10px;
      background: #fff;
      position: relative;
      color: ${isActive ? colors.primary : colors.basicLight};
      padding: 0 0.2rem;

      &:before {
        content: '';
        position: absolute;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        background: ${isActive ? gradients.primary : colors.basicLight};
        border-radius: 34px;
        z-index: -1;
      }

      & svg {
        width: 0.7rem;
        height: 0.7rem;
        fill: ${isActive ? colors.primary : '#fff'};
        stroke: ${isActive ? 'none' : colors.basicLight};
        stroke-width: 0.14rem;
      }
        `;
  }}
`;

const LikeSpan = styled.div`
  ${
  (props) => {
    const { typography } = props.theme;

    return css`
      font-family: ${typography.fontName};
      font-size: 0.7rem;
      user-select: none;
    `;
  }
}`;

export {
  LikeInput,
  LikeLabel,
  LikeSpan,
};
