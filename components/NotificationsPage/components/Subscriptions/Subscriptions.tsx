import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import Toggle from 'components/Toggle/Toggle';
import { AppState } from 'redux/store.types';
import { subscriptionUpdate, subscriptionUpdateCompleted } from 'redux/Subscriptions/redux/actions';

import * as S from './Subscriptions.styles';

type StateProps = {
  isPending: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.subscriptions.isSubscriptionUpdatePending,
  isCompleted: state.subscriptions.isSubscriptionUpdateCompleted,
  statusText: state.subscriptions.subscriptionUpdateStatusText,
});

const mapDispatch = {
  startSubscriptionUpdate: subscriptionUpdate,
  stopSubscriptionUpdate: subscriptionUpdateCompleted,
};

type OwnProps = {
  email: string;
  specialOffers: boolean;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  specialOffers: boolean;
};

const Subscriptions = ({
  email,
  specialOffers,
  isPending,
  isCompleted,
  statusText,
  startSubscriptionUpdate,
  stopSubscriptionUpdate,
}: Props): JSX.Element => {
  const onSubmit = ({ specialOffers: newValue }: FormData) => {
    startSubscriptionUpdate({ email, subscriptions: { specialOffers: newValue } });
  };

  return (
    <S.Subscriptions>
      <S.Title>Новостные рассылки</S.Title>
      <Form
        initialValues={{ specialOffers }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              <S.List>
                <S.Item>
                  <Toggle name="specialOffers" label="Получать спецпредложения" />
                </S.Item>
              </S.List>
              <Button disabled={isPending} isFlat isFilled>
                Сохранить
              </Button>
            </form>
            {isCompleted && (
              <PopUpNotification
                message={statusText}
                onConfirmButtonClick={stopSubscriptionUpdate}
              />
            )}
          </>
        )}
      />
    </S.Subscriptions>
  );
};

export default connect(mapState, mapDispatch)(Subscriptions);
