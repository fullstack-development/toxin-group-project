import PersonalInfo from '../PersonalInfo/PersonalInfo';
import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => (
  <S.MainContent>
    <S.Title>Личная информация</S.Title>
    <PersonalInfo />
  </S.MainContent>
);

export default MainContent;
