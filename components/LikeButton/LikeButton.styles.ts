import styled from 'styled-components';

interface LikeSpan {
  isActive: boolean;
}

const LikeInput = styled.input`
  width: 0;
`;

const LikeLabel = styled.label<LikeSpan>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 2.7rem;
  height: 1.3rem;
  border-radius: 10px;
  background: #fff;
  position: relative;
  color: ${(props) => (props.isActive ? props.theme.colors.primary : props.theme.colors.basicLight)};
  padding: 0 0.2rem;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    background: ${(props) => (props.isActive ? props.theme.gradients.primary : props.theme.colors.basicLight)};
    border-radius: 34px;
    z-index: -1;
  }

  & svg {
    width: 0.7rem;
    height: 0.7rem;
    fill: ${(props) => (props.isActive ? props.theme.colors.primary : '#fff')};
    stroke: ${(props) => (props.isActive ? 'none' : props.theme.colors.basicLight)};
    stroke-width: 0.14rem;
  }
`;

const LikeSpan = styled.div`
  font-family: ${(props) => (props.theme.typography.fontName)} Arial, sans-serif;
  font-size: 0.7rem;
  user-select: none;
`;

export {
  LikeInput,
  LikeLabel,
  LikeSpan,
};
