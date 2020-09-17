import DayPicker from 'react-day-picker';
import { DayPickerProps } from 'react-day-picker/types/Props';
import styled, { css } from 'styled-components';
import materialIcons from 'shared/styles/mixins/material-icons';

type Control = {
  variant: 'primary' | 'basic';
  onClick: () => void;
}

type Container = {
  isVisible: boolean;
}

const NavBarButton = styled.button`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      background: ${colors.primary};
      ${materialIcons};
      cursor: pointer;
      border: none;
      outline: none;
      font-size: 1.71rem;

      &:focus,
      &:hover {
        transform: scale(1.2);
      }

      &:first-child {
        float: left;
      }

      &:last-child {
        float: right;
      }
    `;
  }}
`;

const CalendarContainer = styled.div<Container>`
  ${(props) => {
    const { colors } = props.theme;
    const { isVisible } = props;

    return css`
      display: ${isVisible ? 'block' : 'none'};
      top: 5rem;
      position: absolute;
      max-width: 22.9rem;
      border: 0.1rem solid ${colors.basicLight};
      border-radius: 0.3rem;
      padding: 0 1.2rem;
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
    const { variant } = props;

    return css`
      border: none;
      outline: none;
      background: inherit;
      font-family: ${typography.fontName};
      font-size: 0.8571rem;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      color: ${variant === 'basic' ? colors.basicDark : colors.primary};
    `;
  }}
`;

const Calendar = styled(DayPicker) <DayPickerProps>`
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
        :not(.DayPicker-Day--today)
        :hover {
          background: ${colors.basicLightest};
        }

        &:hover {
          border-radius: 50%;
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
            background: ${gradients.secondary};
            opacity: 1;
            top: 0;
            right: 0;
            z-index: -1;
          }
        }
      }

      & .DayPicker-Day--start.DayPicker-Day--today:after,
      & .DayPicker-Day--end.DayPicker-Day--today:after {
        opacity: .25;
        width: 50%;
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
  NavBarButton,
  CalendarContainer,
  CalendarControls,
  CalendarButton,
  Calendar,
};
