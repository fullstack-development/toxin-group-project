import { makeStyles } from '@material-ui/core/styles';
import { useState, memo } from 'react';

import { User } from 'services/api/Firebase/modules/Authentication/model';
import { Avatar, TextButton } from 'shared/view/elements';

import { RemoveAvatar } from './components/RemoveAvatar/RemoveAvatar';
import { UpdateAvatar } from './components/UpdateAvatar/UpdateAvatar';
import * as S from './EditAvatar.styles';

type Props = {
  user: User;
  photoURL: string;
};

const EditAvatar = memo(({ user, photoURL }: Props) => {
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
    e.target.value = '';
  };

  const handleEditorCancel = () => {
    setEditorVisible(false);
  };

  const handleRemoveButtonClick = () => {
    setConfirmationVisible(true);
  };

  const handleConfirmationCancel = () => {
    setConfirmationVisible(false);
  };

  const handleConfirmationConfirm = () => {
    setConfirmationVisible(false);
  };

  return (
    <S.EditAvatar>
      <S.AvatarWrapper>
        <Avatar photoURL={photoURL} className={classes.avatarLoader} />
        {isEditorVisible && (
          <S.CropperWrapper>
            <UpdateAvatar user={user} onCancel={handleEditorCancel} image={image} />
          </S.CropperWrapper>
        )}
      </S.AvatarWrapper>
      <S.Buttons>
        <S.EditButtonWrapper>
          <S.EditButton>Изменить аватар</S.EditButton>
          <S.HiddenInput type="file" accept="image/*" onChange={handleInputChange} />
        </S.EditButtonWrapper>
        {photoURL && (
          <TextButton isSecondary onClick={handleRemoveButtonClick}>
            Удалить аватар
          </TextButton>
        )}
      </S.Buttons>
      {isConfirmationVisible && (
        <RemoveAvatar
          user={user}
          onConfirm={handleConfirmationConfirm}
          onCancel={handleConfirmationCancel}
        />
      )}
    </S.EditAvatar>
  );
});

export { EditAvatar };
