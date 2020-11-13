import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Button from 'components/Button/Button';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import Toggle from 'components/Toggle/Toggle';
import { AppState } from 'redux/store.types';
import { subscriptionUpdate, completeSubscriptionUpdate } from 'redux/Subscriptions/redux/actions';

import * as S from './Subscriptions.styles';

type StateProps = {
  isPending: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.subscriptions.isUpdatePending,
  isCompleted: state.subscriptions.isUpdateCompleted,
  statusText: state.subscriptions.updateStatusText,
});

const mapDispatch = {
  startSubscriptionUpdate: subscriptionUpdate,
  stopSubscriptionUpdate: completeSubscriptionUpdate,
};

type OwnProps = {
  email: string;
  hasSpecialOffers: boolean;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  hasSpecialOffers: boolean;
};

const Subscriptions = ({
  email,
  hasSpecialOffers,
  isPending,
  isCompleted,
  statusText,
  startSubscriptionUpdate,
  stopSubscriptionUpdate,
}: Props): JSX.Element => {
  const onSubmit = ({ hasSpecialOffers: newValue }: FormData) => {
    startSubscriptionUpdate({ email, subscriptions: { hasSpecialOffers: newValue } });
  };

  const { t } = useTranslation('Notifications');

  return (
    <S.Subscriptions>
      <S.Title>{t('Newsletters')}</S.Title>
      <Form
        initialValues={{ hasSpecialOffers }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              <S.List>
                <S.Item>
                  <Toggle name="hasSpecialOffers" label={t('Receive special offers')} />
                </S.Item>
              </S.List>
              <Button disabled={isPending} isFlat isFilled>
                {t('Save')}
              </Button>
            </form>
            {isCompleted && (
              <PopUpNotification
                message={t(statusText)}
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
