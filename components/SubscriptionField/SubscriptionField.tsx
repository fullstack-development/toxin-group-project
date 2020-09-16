import * as S from './SubscriptionField.styles';

const SubscriptionField: React.FC = () => (
  <S.InputContainer>
    <S.Input />
    <S.SubmitButton aria-label="Отправить" />
  </S.InputContainer>

);

export default SubscriptionField;
