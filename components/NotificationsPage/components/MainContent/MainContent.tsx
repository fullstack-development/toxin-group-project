import Subscriptions from '../Subscriptions/Subscriptions';
import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => (
  <S.MainContent>
    <S.Title>Уведомления</S.Title>
    <Subscriptions />
  </S.MainContent>
);

export default MainContent;
