import { memo } from 'react';

import TextButton from 'components/TextButton/TextButton';

import * as S from './PopUpNotification.styles';

type Props = {
  message: string;
  onConfirmButtonClick: () => void;
};

const PopUpNotification = memo(({ message, onConfirmButtonClick }: Props) => (
  <S.PopUpNotification>
    <S.Message>{message}</S.Message>
    <TextButton type="button" onClick={onConfirmButtonClick}>
      ОК
    </TextButton>
  </S.PopUpNotification>
));

PopUpNotification.displayName = 'PopUpNotification';

export default PopUpNotification;
