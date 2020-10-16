import { Form, Field } from 'react-final-form';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { emailValidator } from 'shared/helpers/validators';

type Props = {
  email: string;
};

const EditEmail = ({ email }: Props): JSX.Element => {
  const onSubmit = (data) => {
    data;
  };

  return (
    <Form
      initialValues={{ email }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            type="email"
            render={({ input }) => (
              <Input {...input} placeholder="Email" validators={[emailValidator]} />
            )}
          />
          <Button isFlat isFilled>
            Сохранить
          </Button>
        </form>
      )}
    />
  );
};

export default EditEmail;
