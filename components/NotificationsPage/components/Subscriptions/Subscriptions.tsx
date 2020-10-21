import { Form } from 'react-final-form';

import Button from 'components/Button/Button';
import Toggle from 'components/Toggle/Toggle';

import * as S from './Subscriptions.styles';

const onSubmit = (data) => {
  data;
};

const Subscriptions = (): JSX.Element => (
  <S.Subscriptions>
    <S.Title>Новостные рассылки</S.Title>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <S.List>
            <S.Item>
              <Toggle name="specialOffers" label="Получать спецпредложения" />
            </S.Item>
          </S.List>
          <Button isFlat isFilled>
            Сохранить
          </Button>
        </form>
      )}
    />
  </S.Subscriptions>
);

export default Subscriptions;
