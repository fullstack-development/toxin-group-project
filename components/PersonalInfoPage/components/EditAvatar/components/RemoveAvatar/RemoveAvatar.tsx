import { connect } from 'react-redux';

import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { avatarRemove, avatarRemoveCompleted } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { User } from 'services/api/Firebase/modules/Authentication/types';

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
  stopAvatarRemove: avatarRemoveCompleted,
};

type OwnProps = {
  user: User;
  onConfirm: () => void;
  onCancel: () => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const RemoveAvatar = ({
  user,
  onCancel,
  onConfirm,
  isCompleted,
  statusText,
  startAvatarRemove,
  stopAvatarRemove,
}: Props): JSX.Element => {
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
};

const ConnectedComponent = connect(mapState, mapDispatch)(RemoveAvatar);
export { ConnectedComponent as RemoveAvatar };
