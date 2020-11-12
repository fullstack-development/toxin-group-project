import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { AppState } from 'redux/store.types';
import {
  subscriptionUpdate,
  completionSubscriptionUpdate,
} from 'redux/Subscriptions/redux/actions';
import { emailValidator } from 'shared/helpers/validators';
import { PopUpNotification } from 'shared/view/components';
import { InputProps } from 'shared/view/elements/Input/Input';

import * as S from './SubscriptionField.styles';

type StateProps = {
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isCompleted: state.subscriptions.isUpdateCompleted,
  statusText: state.subscriptions.updateStatusText,
});

const mapDispatch = {
  startSubscriptionUpdate: subscriptionUpdate,
  stopSubscriptionUpdate: completionSubscriptionUpdate,
};

type Props = InputProps & StateProps & typeof mapDispatch;

type FormData = {
  email: string;
};

const SubscriptionField = ({
  isCompleted,
  statusText,
  startSubscriptionUpdate,
  stopSubscriptionUpdate,
  ...rest
}: Props): JSX.Element => {
  const onSubmit = ({ email }: FormData) => {
    startSubscriptionUpdate({ email, subscriptions: { hasSpecialOffers: true } });
  };
  const { t } = useTranslation('SubscriptionField');
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              render={({ input }) => (
                <S.Container>
                  <S.Input {...input} {...rest} validators={[emailValidator]} />
                  <S.SubmitButton aria-label={t('Send')} />
                </S.Container>
              )}
            />
          </form>
          {isCompleted && (
            <PopUpNotification message={statusText} onConfirmButtonClick={stopSubscriptionUpdate} />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(SubscriptionField);
