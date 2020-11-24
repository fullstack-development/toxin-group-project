import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { TextButton } from 'shared/view/elements';

import * as S from './PopUpNotification.styles';

type Props = {
  message: string;
  withCancelButton?: boolean;
  onConfirmButtonClick: () => void;
  onCancelButtonClick?: () => void;
};

const PopUpNotification = memo(
  ({ message, onConfirmButtonClick, withCancelButton, onCancelButtonClick }: Props) => {
    const { t } = useTranslation('shared');

    return (
      <S.PopUpNotification>
        <S.Message>{message}</S.Message>
        <S.Buttons withCancelButton={withCancelButton}>
          <TextButton type="button" onClick={onConfirmButtonClick}>
            {t('Ok')}
          </TextButton>
          {withCancelButton && (
            <TextButton type="button" onClick={onCancelButtonClick} isSecondary>
              {t('Cancel')}
            </TextButton>
          )}
        </S.Buttons>
      </S.PopUpNotification>
    );
  },
);

export { PopUpNotification };
