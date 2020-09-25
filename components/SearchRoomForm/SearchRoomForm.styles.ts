import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const SearchRoomForm = styled.section`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      max-width: 27.1429rem;
      min-width: 21.4286rem;
      background: ${colors.defaultBackground};
      padding: 2.75rem 2rem 2rem 2.05rem;
      border: 0.0714rem solid rgba(0, 0, 0, 0.12);
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
      border-radius: 0.2857rem;

      @media (max-width: 460px) {
        padding: 1rem;
      }
    `;
  }}
`;

const Title = styled.h1`
  ${titles.h1}
  font-size: 1.7143rem;
  line-height: 1.25;
  margin-bottom: 1.3214rem;

  @media (max-width: 460px) {
    font-size: 1.5rem;
  }
`;

const TimePickerWrapper = styled.div`
  margin-bottom: 1.4286rem;
`;

const DropdownWrapper = styled.div`
  margin-bottom: 2.1429rem;
`;

const DropdownTitle = styled.h3`
  ${titles.h3}
  margin-bottom: 0.2143rem;
`;

export { SearchRoomForm, Title, TimePickerWrapper, DropdownWrapper, DropdownTitle };
