import { useEffect, memo } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import { avatarUpdate, completeAvatarUpdate } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication/model';
import { AvatarEditor, PopUpNotification } from 'shared/view/components';

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
  stopAvatarUpdate: completeAvatarUpdate,
};

type OwnProps = {
  user: User;
  image: string;
  onCancel: () => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const UpdateAvatar = memo(
  ({
    user,
    image,
    onCancel,
    isCompleted,
    statusText,
    startAvatarUpdate,
    stopAvatarUpdate,
  }: Props) => {
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
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(UpdateAvatar);
export { ConnectedComponent as UpdateAvatar };
