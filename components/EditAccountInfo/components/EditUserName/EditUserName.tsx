import { Form, Field } from 'react-final-form';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

type Props = {
  displayName: string;
};

const onSubmit = (formData) => {
  formData;
};

const EditUserName = ({ displayName }: Props): JSX.Element => {
  const [name, surname] = displayName.split(' ');

  return (
    <Form
      initialValues={{ name, surname }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            render={({ input }) => <Input {...input} label="Имя" placeholder="Имя" />}
          />
          <Field
            name="surname"
            render={({ input }) => <Input {...input} label="Фамилия" placeholder="Фамилия" />}
          />
          <Button isFlat isFilled>
            Сохранить
          </Button>
        </form>
      )}
    />
  );
};

export default EditUserName;
