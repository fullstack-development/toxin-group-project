import TextButton from 'components/TextButton/TextButton';

import * as S from './PopUp.styles';

type Props = {
  message: string;
  onConfirmButtonClick: () => void;
};

const PopUp = ({ message, onConfirmButtonClick }: Props): JSX.Element => (
  <S.PopUp>
    <S.Message>{message}</S.Message>
    <TextButton onClick={onConfirmButtonClick}>ОК</TextButton>
  </S.PopUp>
);

export default PopUp;
