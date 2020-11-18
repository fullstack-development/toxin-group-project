import { useEffect } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import AvatarEditor from 'components/AvatarEditor/AvatarEditor';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { avatarUpdate, avatarUpdateCompleted } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { User } from 'services/api/Firebase/modules/Authentication/types';

type StateProps = {
  isPending: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.profile.isAvatarUpdatePending,
  isCompleted: state.profile.isAvatarUpdateCompleted,
  statusText: state.profile.avatarUpdateStatusText,
});

const mapDispatch = {
  startAvatarUpdate: avatarUpdate,
  stopAvatarUpdate: avatarUpdateCompleted,
};

type OwnProps = {
  user: User;
  image: string;
  onCancel: () => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const UpdateAvatar = ({
  user,
  image,
  onCancel,
  isCompleted,
  statusText,
  startAvatarUpdate,
  stopAvatarUpdate,
}: Props): JSX.Element => {
  const handleFormSubmit = (): unknown => ({});

  const handleNotificationCancel = () => {
    stopAvatarUpdate();
    onCancel();
  };

  const handleEditorCancel = () => {
    onCancel();
  };

  const handleEditorSave = (canvasScaled: HTMLCanvasElement) => {
    canvasScaled.toBlob((blob: Blob) => {
      startAvatarUpdate({ user, avatar: blob });
    });
  };

  useEffect(() => {
    stopAvatarUpdate();
  }, [stopAvatarUpdate]);

  return (
    <>
      {isCompleted ? (
        <PopUpNotification message={statusText} onConfirmButtonClick={handleNotificationCancel} />
      ) : (
        <Form
          onSubmit={handleFormSubmit}
          render={() => (
            <AvatarEditor onCancel={handleEditorCancel} image={image} onSave={handleEditorSave} />
          )}
        />
      )}
    </>
  );
};

const ConnectedComponent = connect(mapState, mapDispatch)(UpdateAvatar);
export { ConnectedComponent as UpdateAvatar };
