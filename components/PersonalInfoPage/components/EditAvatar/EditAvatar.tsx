import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import Avatar from 'components/Avatar/Avatar';
import AvatarEditor from 'components/AvatarEditor/AvatarEditor';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import TextButton from 'components/TextButton/TextButton';
import {
  avatarUpdate,
  avatarUpdateCompleted,
  avatarRemove,
  avatarRemoveCompleted,
} from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { User } from 'services/api/Firebase/modules/Authentication/types';

import * as S from './EditAvatar.styles';

type StateProps = {
  isPending: boolean;
  isCompleted: boolean;
  statusText: string;
  isRemovePending: boolean;
  isRemoveCompleted: boolean;
  removeStatusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.profile.isAvatarUpdatePending,
  isCompleted: state.profile.isAvatarUpdateCompleted,
  statusText: state.profile.avatarUpdateStatusText,
  isRemovePending: state.profile.isAvatarRemovePending,
  isRemoveCompleted: state.profile.isAvatarRemoveCompleted,
  removeStatusText: state.profile.avatarRemoveStatusText,
});

const mapDispatch = {
  startAvatarUpdate: avatarUpdate,
  stopAvatarUpdate: avatarUpdateCompleted,
  startAvatarRemove: avatarRemove,
  stopAvatarRemove: avatarRemoveCompleted,
};

type OwnProps = {
  user: User;
  photoURL: string;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const EditAvatar = ({
  user,
  photoURL,
  isCompleted,
  statusText,
  startAvatarUpdate,
  stopAvatarUpdate,
  isRemoveCompleted,
  removeStatusText,
  startAvatarRemove,
  stopAvatarRemove,
}: Props): JSX.Element => {
  const [isEditorVisible, setEditorVisible] = useState(false);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [image, setImage] = useState(null);

  const useStyles = makeStyles(() => ({
    avatarLoader: { width: '7.14285rem', height: '7.14285rem' },
  }));
  const classes = useStyles();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditorVisible(true);
    setImage(e.target.files[0]);
  };

  const handleEditorClose = () => {
    setEditorVisible(false);
  };

  const handleEditorSave = (canvasScaled: HTMLCanvasElement) => {
    setImage(null);
    setEditorVisible(false);
    canvasScaled.toBlob((blob: Blob) => {
      startAvatarUpdate({ user, avatar: blob });
    });
  };

  const handleRemoveButtonClick = () => {
    setConfirmationVisible(true);
  };

  const handleConfirmationCancel = () => {
    setConfirmationVisible(false);
  };

  const handleConfirmationConfirm = () => {
    startAvatarRemove({ user });
    setConfirmationVisible(false);
  };

  useEffect(() => {
    stopAvatarUpdate();
    stopAvatarRemove();
  }, [stopAvatarRemove, stopAvatarUpdate]);

  return (
    <S.EditAvatar>
      <Form
        onSubmit={() => console.log()}
        render={() => (
          <>
            <S.AvatarWrapper>
              <Avatar photoURL={photoURL} className={classes.avatarLoader} />
            </S.AvatarWrapper>
            {isEditorVisible && (
              <S.CropperWrapper>
                <AvatarEditor onClose={handleEditorClose} image={image} onSave={handleEditorSave} />
              </S.CropperWrapper>
            )}
            <S.Buttons>
              <S.EditButtonWrapper>
                <S.EditButton>Изменить аватар</S.EditButton>
                <S.HiddenInput type="file" accept="image/*" onChange={handleInputChange} />
              </S.EditButtonWrapper>
              <TextButton isSecondary onClick={handleRemoveButtonClick}>
                Удалить аватар
              </TextButton>
            </S.Buttons>
          </>
        )}
      />
      {isCompleted && (
        <PopUpNotification message={statusText} onConfirmButtonClick={stopAvatarUpdate} />
      )}
      {isRemoveCompleted && (
        <PopUpNotification message={statusText} onConfirmButtonClick={stopAvatarRemove} />
      )}
      {isConfirmationVisible && (
        <PopUpNotification
          message="Вы уверены, что хотите удалить аватар?"
          withCancelButton
          onConfirmButtonClick={handleConfirmationConfirm}
          onCancelButtonClick={handleConfirmationCancel}
        />
      )}
    </S.EditAvatar>
  );
};

export default connect(mapState, mapDispatch)(EditAvatar);
