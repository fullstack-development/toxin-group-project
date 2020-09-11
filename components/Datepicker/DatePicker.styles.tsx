import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';
import DayPicker from 'react-day-picker';

type FormElement = {
  isDropDown?: boolean;
}

type DatePickerButton = {
  type: 'primary' | 'basic';
}

const DatePickerContainer = styled.div`
  position: relative;
`;

const DatePickerCalendar = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      top: 5rem;
      position: absolute;
      width: 100%;
      border: 1px solid ${colors.basicLight};
      border-radius: 0.3rem;
      padding: 0 5%;
    `;
  }}
`;

const DatePickerControls = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
`;

const DatePickerButton = styled.button<DatePickerButton>`
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

const DatePicker = styled(DayPicker)`
  ${(props) => {
    const { colors, typography, gradients } = props.theme;

    return css`
      & .DayPicker-wrapper {
        &:focus {
        outline: none;
        }
      }

      & .DayPicker-Day--selected {
        background: linear-gradient(180deg, rgba(188,156,255,0.25) 0%, rgba(139,164,249,0.25) 100%);
      }

      & .DayPicker-NavButton--prev {
        display: block;
        float: left;
        border: 1px solid red;
        width: 20px;
        height: 20px;
      }

      & .DayPicker-NavButton--next {
        display: block;
        float: right;
        border: 1px solid red;
        width: 20px;
        height: 20px;
      }

      & .DayPicker-Caption {
        font-weight: bold;
        font-size: 1.3571rem;
        text-align: center;
        margin-top: 1rem;
      }

      & .DayPicker-Weekdays {
        margin-top: 2rem;
      }

      & .DayPicker-WeekdaysRow {
        display: flex;
        justify-content: space-between;
        color: ${colors.primary};
      }

      & .DayPicker-Weekday > abbr {
        text-decoration: none;
        font-weight: bold;
        font-family: ${typography.fontName};
        font-size: .8rem;
      }

      & .DayPicker-Week {
        display: table-row;
      }

      & .DayPicker-Weekday {
        width: 10rem;
        text-align: center;
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

        &:hover {
          background: ${colors.basicLightest};
        }
      }
    `;
  }};
`;

const ExpandIcon = styled(ExpandMoreIcon)`
  position: absolute;
  bottom: 1.6rem;
  right: 0.8rem;
  cursor: pointer;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const FormElement = styled.div<FormElement>`
  ${(props) => {
    const { isDropDown } = props;

    return css`
      position: relative;
      width: ${isDropDown ? '100%' : '47%'};
      max-width: ${isDropDown ? '19.0714rem' : '100%'};
    `;
  }}
`;

export {
  DatePickerContainer,
  DatePickerCalendar,
  DatePickerControls,
  DatePickerButton,
  DatePicker,
  Form,
  FormElement,
  ExpandIcon,
};
