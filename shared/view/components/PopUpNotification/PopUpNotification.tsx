import { memo } from 'react';

import { TextButton } from 'shared/view/elements';

import * as S from './PopUpNotification.styles';

type Props = {
  message: string;
  withCancelButton?: boolean;
  onConfirmButtonClick: () => void;
  onCancelButtonClick?: () => void;
};

const PopUpNotification = memo(
  ({ message, onConfirmButtonClick, withCancelButton, onCancelButtonClick }: Props) => (
    <S.PopUpNotification>
      <S.Message>{message}</S.Message>
      <S.Buttons withCancelButton={withCancelButton}>
        <TextButton type="button" onClick={onConfirmButtonClick}>
          ОК
        </TextButton>
        {withCancelButton && (
          <TextButton type="button" onClick={onCancelButtonClick} isSecondary>
            Отменить
          </TextButton>
        )}
      </S.Buttons>
    </S.PopUpNotification>
  ),
);

export { PopUpNotification };
