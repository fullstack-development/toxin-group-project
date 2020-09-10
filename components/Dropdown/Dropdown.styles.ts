import ExpandMore from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';

type ListContainerProps = {
  isOpen: boolean;
}

type ResetButtonProps = {
  isHidden: boolean;
}

const Dropdown = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      position: relative;

      &:hover > button,
      &:focus > button {
        border: 0.0714rem solid ${colors.basic};
      }
    `;
  }}
`;

const LabelText = styled.span`
  ${(props) => {
    const { colors, typography } = props.theme;
    return css`
      display: inline-block;
      font: 700 0.8571rem ${typography.fontName};
      color: ${colors.basicDarkest};
      text-transform: uppercase;
      margin-bottom: 0.3571rem;
    `;
  }}
`;

const Result = styled.button`
  ${(props) => {
    const { colors, typography } = props.theme;

    return css`
      position: relative;
      width: 100%;
      padding: 0.9643rem;
      padding-right: 2.5rem;
      border-radius: 0.2857rem 0.2857rem 0 0;
      border: 0.0714rem solid ${colors.basicLight};
      text-align: left;
      font: 1rem ${typography.fontName};
      line-height: 1.2857rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: transparent;
      cursor: pointer;

      &::placeholder {
        font-family: ${typography.fontName};
        color: ${colors.basicDark};
      }

      &:hover,
      &:focus {
        border: 0.0714rem solid ${colors.basic};
        outline: none;
      }
    `;
  }}
`;

const ExpandIcon = styled(ExpandMore)`
  position: absolute;
  right: 0.8571rem;
  top: 50%;
  transform: translate(0, -50%);
`;

const ListContainer = styled.div<ListContainerProps>`
  ${(props) => {
    const { colors } = props.theme;
    const { isOpen } = props;
    return css`
      display: ${isOpen ? 'block' : 'none'};
      width: 100%;
      background-color: ${colors.defaultBackground};
      position: absolute;
      z-index: 5;
      bottom: 0;
      left: 0;
      padding: 0 0.5rem 0 0.9286rem;
      transform: translate(0, 100%);
      border: 0.0714rem solid ${colors.basic};
      ${isOpen
      && css`
        border-top: 0;
      `}
      border-radius: 0 0 0.2857rem 0.2857rem;
    `;
  }}
`;

const List = styled.ul`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      padding-bottom: 0.3571rem;
      font: 700 0.8571rem ${typography.fontName};
      line-height: 1.0714rem;
      text-transform: uppercase;
    `;
  }}
`;

const Item = styled.li`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3571rem 0 0.1429rem 0;
  `}
`;

const Button = styled.button`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      width: 2.1429rem;
      height: 2.1429rem;
      border: 0.0714rem solid ${colors.basicLight};
      border-radius: 50%;
      background-color: transparent;
      font: inherit;
      color: ${colors.basic};
      cursor: pointer;

      &:disabled {
        opacity: 0.38;
      }
    `;
  }}
`;

const Input = styled.input`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      max-width: 2.5rem;
      border: 0;
      font: inherit;
      text-align: center;
      color: ${colors.basic};

      &:focus {
        outline: 0;
      }
    `;
  }}
`;

const ItemTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  word-break: break-word;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.9286rem;
`;

const ResetButton = styled.button<ResetButtonProps>`
  ${(props) => {
    const { isHidden } = props;

    return css`
      ${isHidden
      && css`
        visibility: hidden;
      `}
    `;
  }}
`;
const ApplyButton = styled.button``;

export {
  Dropdown,
  Result,
  List,
  Item,
  Button,
  Input,
  ItemTitle,
  InputContainer,
  ListContainer,
  Controls,
  ResetButton,
  ApplyButton,
  ExpandIcon,
  LabelText,
};
