import DayPicker from 'react-day-picker';
import styled, { css } from 'styled-components';
import { DayPickerProps } from 'react-day-picker/types/Props';

type Control = {
  type: 'primary' | 'basic';
  onClick: () => void;
}

type Container = {
  isVisible: boolean;
}

const CalendarContainer = styled.div<Container>`
  ${(props) => {
    const { colors } = props.theme;
    const { isVisible } = props;

    return css`
      display: ${isVisible ? 'block' : 'none'};
      top: 5rem;
      position: absolute;
      width: 100%;
      border: 0.1rem solid ${colors.basicLight};
      border-radius: 0.3rem;
      padding: 0 6%;
      z-index: 1000;
      background: ${colors.defaultBackground};
    `;
  }}
`;

const CalendarControls = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
`;

const CalendarButton = styled.button<Control>`
  ${(props) => {
    const { colors, typography } = props.theme;
    const { type } = props;

    return css`
      border: none;
      outline: none;
      background: inherit;
      font-family: ${typography.fontName};
      font-size: 0.8571rem;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      color: ${type === 'basic' ? colors.basicDark : colors.primary};
    `;
  }}
`;

const Calendar = styled(DayPicker)<DayPickerProps>`
  ${(props) => {
    const { colors, typography, gradients } = props.theme;

    return css`
      & .DayPicker-wrapper {
        &:focus {
          outline: none;
        }
      }

      & .DayPicker-Day {
        width: 10rem;
        height: 2.8571rem;
        display: table-cell;
        text-align: center;
        font-family: ${typography.fontName};
        font-size: 0.8571rem;
        color: ${colors.basicDark};
        vertical-align: middle;
        cursor: pointer;

        &--today {
          background: ${gradients.secondary};
          color: ${colors.defaultBackground};
          font-weight: bold;
          border-radius: 50%;
          cursor: default;
        }

        &--selected {
          background: ${gradients.primary};
          opacity: .25;
          color: ${colors.basicDarkest};
        }

        &--start, &--end {
          color: ${colors.defaultBackground};
          font-weight: bold;
          outline: none;
          position: relative;
          background: ${gradients.primary};
          border-radius: 50%;
          opacity: 1;

          &:after {
            content: '';
            display: block;
            width: 50%;
            height: 100%;
            position: absolute;
            background: ${gradients.primary};
            top: 0;
            right: 0;
            z-index: -1;
            opacity: .25;
          }
        }

        &--end:after {
          left: 0;
        }

        &:not(.DayPicker-Day--start)
        :not(.DayPicker-Day--end)
        :hover {
          background: ${colors.basicLightest};
        }
      }


      & .DayPicker-Day--selected {
        &.DayPicker-Day--today {
          position: relative;

          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            background: ${gradients.primary};
            opacity: 1;
            top: 0;
            right: 0;
          }
        }
      }

      & .DayPicker-NavButton {
        &--prev {
          display: block;
          float: left;
          width: 1rem;
          height: 1rem;
          cursor: pointer;
          color: ${colors.primary};
          outline: none;

          &:hover:before {
            transform: scale(1.2);
          }

          &:before {
            content: '←';
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            font-size: 2.2rem;
          }
        }

        &--next {
          display: block;
          float: right;
          width: 1rem;
          height: 1rem;
          cursor: pointer;
          color: ${colors.primary};
          outline: none;

          &:hover:before {
            transform: scale(1.2);
          }

          &:before {
            content: '→';
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            font-size: 2.2rem;
          }
        }
      }

      & .DayPicker {
        &-Caption {
          font-weight: bold;
          font-size: 1.3571rem;
          text-align: center;
          margin-top: 1.6rem;
        }

        &-Weekdays {
          margin: 2.8rem 0rem 0.8rem 0;
        }

        &-Weekday {
          width: 10rem;
          text-align: center;

          & > Abbr {
            text-decoration: none;
            font-weight: bold;
            font-family: ${typography.fontName};
            font-size: .8rem;
          }
        }

        &-Week {
          display: table-row;
        }

        &-WeekdaysRow {
          display: flex;
          justify-content: space-between;
          color: ${colors.primary};
        }
      }
    `;
  }};
`;

export {
  CalendarContainer,
  CalendarControls,
  CalendarButton,
  Calendar,
};
