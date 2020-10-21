import { useState } from 'react';

import TextButton from 'components/TextButton/TextButton';

import EditBirthday from './components/EditBirthday/EditBirthday';
import EditEmail from './components/EditEmail/EditEmail';
import EditGender from './components/EditGender/EditGender';
import EditSubscription from './components/EditSubscription/EditSubscription';
import EditUserName from './components/EditUserName/EditUserName';
import * as S from './EditPersonalInfo.styles';

type Props = {
  user: firebase.User;
  title: string;
  component: string;
  value?: string;
  description?: string;
};

const EditPersonalInfo = ({ user, title, component, value, description }: Props): JSX.Element => {
  const [isEdit, setEdit] = useState(false);

  const mapEditingComponents = {
    userName: <EditUserName user={user} displayName={value} />,
    gender: <EditGender gender={value} />,
    birthday: <EditBirthday birthday={value} />,
    email: <EditEmail user={user} email={value} />,
    subscription: <EditSubscription specialOffers={false} />,
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
