import { Form } from 'react-final-form';

import Button from 'components/Button/Button';
import RadioButton from 'components/RadioButton/RadioButton';

import * as S from './EditGender.styles';

type Props = {
  gender: string;
};

const EditGender = ({ gender }: Props): JSX.Element => {
  const onSubmit = (data) => {
    data;
  };

  const mapGender = { Мужчина: 'man', Женщина: 'woman' };

  return (
    <Form
      initialValues={{ gender: mapGender[gender] }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <S.Gender>
            <RadioButton name="gender" value="man" label="Мужчина" />
            <RadioButton name="gender" value="wonman" label="Женщина" />
          </S.Gender>
          <Button isFlat isFilled>
            Сохранить
          </Button>
        </form>
      )}
    />
  );
};

export default EditGender;
