import { Form, Field } from 'react-final-form';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { dateValidator, dateFormatMask } from 'shared/helpers/validators';

type Props = {
  birthday: string;
};

const EditBirthday = ({ birthday }: Props): JSX.Element => {
  const onSubmit = (data) => {
    data;
  };

  return (
    <Form
      initialValues={{ birthday }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="birthday"
            render={({ input }) => (
              <Input
                {...input}
                placeholder="ДД.ММ.ГГГГ"
                validators={[dateValidator]}
                mask={dateFormatMask}
              />
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
export default EditBirthday;
