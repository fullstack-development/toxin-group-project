import { Form } from 'react-final-form';

import Button from 'components/Button/Button';
import Toggle from 'components/Toggle/Toggle';

import * as S from './EditSubscription.styles';

type Props = {
  specialOffers: boolean;
};

const EditSubscription = ({ specialOffers }: Props): JSX.Element => {
  const onSubmit = (data) => {
    data;
  };

  return (
    <Form
      initialValues={{ specialOffers }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <S.Subscription>
            <Toggle name="specialOffers" label="Получать спецпредложения" />
          </S.Subscription>
          <Button isFlat isFilled>
            Сохранить
          </Button>
        </form>
      )}
    />
  );
};

export default EditSubscription;
