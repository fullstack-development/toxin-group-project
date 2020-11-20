import { useEffect, memo } from 'react';
import { connect } from 'react-redux';

import { avatarRemove, completeAvatarRemove } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { User } from 'services/api/Firebase/modules/Authentication/model';
import { PopUpNotification } from 'shared/view/components';

type StateProps = {
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isCompleted: state.profile.isAvatarRemoveCompleted,
  statusText: state.profile.avatarRemoveStatusText,
});

const mapDispatch = {
  startAvatarRemove: avatarRemove,
  stopAvatarRemove: completeAvatarRemove,
};

type OwnProps = {
  user: User;
  onConfirm: () => void;
  onCancel: () => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const RemoveAvatar = memo(
  ({
    user,
    onCancel,
    onConfirm,
    isCompleted,
    statusText,
    startAvatarRemove,
    stopAvatarRemove,
  }: Props) => {
    const handleConfirmationCancel = () => {
      onCancel();
    };

    const handleNotificationCancel = () => {
      stopAvatarRemove();
      onConfirm();
    };

    const handleConfirmationSuccess = () => {
      startAvatarRemove({ user });
    };

    useEffect(() => {
      stopAvatarRemove();
    }, [stopAvatarRemove]);

    return (
      <>
        {isCompleted ? (
          <PopUpNotification message={statusText} onConfirmButtonClick={handleNotificationCancel} />
        ) : (
          <PopUpNotification
            message="Вы уверены, что хотите удалить аватар?"
            withCancelButton
            onConfirmButtonClick={handleConfirmationSuccess}
            onCancelButtonClick={handleConfirmationCancel}
          />
        )}
      </>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(RemoveAvatar);
export { ConnectedComponent as RemoveAvatar };
