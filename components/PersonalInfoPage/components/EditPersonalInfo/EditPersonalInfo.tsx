import { useState } from 'react';

import { User } from 'api/Firebase/modules/Authentication/types';
import TextButton from 'components/TextButton/TextButton';

import EditBirthday from './components/EditBirthday/EditBirthday';
import EditDisplayName from './components/EditDisplayName/EditDisplayName';
import EditEmail from './components/EditEmail/EditEmail';
import EditGender from './components/EditGender/EditGender';
import * as S from './EditPersonalInfo.styles';

type Props = {
  user: User;
  title: string;
  component: string;
  value?: string;
  description?: string;
};

const EditPersonalInfo = ({ user, title, component, value, description }: Props): JSX.Element => {
  const [isEdit, setEdit] = useState(false);

  const mapEditingComponents = {
    displayName: <EditDisplayName user={user} displayName={value} />,
    gender: <EditGender user={user} gender={value} />,
    birthday: <EditBirthday user={user} birthday={value} />,
    email: <EditEmail user={user} email={value} />,
  };

  return (
    <>
      <S.Header>
        <S.Title>{title}</S.Title>
        <TextButton type="button" onClick={() => setEdit(!isEdit)}>
          {isEdit ? 'Отменить' : 'Редактировать'}
        </TextButton>
      </S.Header>
      <S.Content>
        <S.Description>{isEdit ? description : value}</S.Description>
        {isEdit && mapEditingComponents[component]}
      </S.Content>
    </>
  );
};

EditPersonalInfo.defaultProps = {
  value: '',
  description: '',
};

export default EditPersonalInfo;
