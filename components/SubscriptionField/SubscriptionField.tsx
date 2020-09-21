import { InputProps } from '../Input/Input';
import * as S from './SubscriptionField.styles';

const SubscriptionField: React.FC<InputProps> = ({ placeholder }: InputProps) => (
  <S.InputContainer>
    <S.Input placeholder={placeholder} onChange={() => {}} />
    <S.SubmitButton aria-label="Отправить" />
  </S.InputContainer>
);

export default SubscriptionField;
