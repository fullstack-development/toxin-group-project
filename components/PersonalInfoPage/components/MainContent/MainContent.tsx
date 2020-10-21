import PersonalInfo from 'components/PersonalInfo/PersonalInfo';

import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => (
  <S.MainContent>
    <S.Title>Личная информация</S.Title>
    <PersonalInfo />
    <S.ButtonShowBookedRooms href="mock/">
      Показать все забронированные номера
    </S.ButtonShowBookedRooms>
  </S.MainContent>
);

export default MainContent;
