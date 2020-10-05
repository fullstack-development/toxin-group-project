import styled, { css } from 'styled-components';

const List = styled.ul`
  width: 100%;
  list-style: none;
`;

const Item = styled.li`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      display: flex;
      width: 100%;
      justify-content: space-between;
      line-height: ${typography.lineHeight};

      &:not(:last-child) {
        margin-bottom: 0.7143rem;
      }
    `;
  }}
`;

const TooltipText = styled.div`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      display: flex;
      visibility: hidden;
      padding: 1.4286rem;
      justify-content: center;
      align-items: center;
      min-width: 7.1429rem;
      min-height: 3.5714rem;
      max-width: 14.2857rem;
      width: max-content;
      position: absolute;
      background-color: white;
      left: 0;
      z-index: 3;
      top: 1.4286rem;
      color: ${colors.basicDark};
      transform: translateX(-100%);
      border: 0.0714rem solid ${colors.basicDarkest};
      cursor: default;
      word-break: break-all;
    `;
  }}
`;

const Tooltip = styled.div`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      width: 1.4286rem;
      height: 1.4286rem;
      font-weight: 700;
      font-size: 0.8571rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      border-radius: 50%;
      right: 0;
      top: 0;
      color: ${colors.basicLight};
      border: 0.0714rem solid ${colors.basicLight};
      cursor: pointer;

      &:hover,
      &:focus {
        ${TooltipText} {
          visibility: visible;
        }
      }
    `;
  }}
`;

const PriceWrapper = styled.div``;

const Price = styled.span``;

const Label = styled.span`
  box-sizing: content-box;
  position: relative;
  width: 100%;
  padding-right: 2.1429rem;
  margin-right: 0.7143rem;
  max-width: 15.2857rem;
`;

export { List, Item, Price, Label, Tooltip, PriceWrapper, TooltipText };
