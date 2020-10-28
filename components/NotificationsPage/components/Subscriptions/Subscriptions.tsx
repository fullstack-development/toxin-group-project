import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import Button from 'components/Button/Button';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import Toggle from 'components/Toggle/Toggle';
import { AppState } from 'redux/store.types';
import {
  updateAdditionalUserDataRequest,
  updateAdditionalUserDataCompleted,
} from 'redux/UpdateAdditionalUserData/redux/actions';

import * as S from './Subscriptions.styles';

interface IStateProps {
  user: User;
  isCompleted: boolean;
  statusText: string;
}

const mapState = (state: AppState): IStateProps => ({
  user: state.authReducer.user,
  isCompleted: state.updateAdditionalUserDataReducer.isCompleted,
  statusText: state.updateAdditionalUserDataReducer.statusText,
});

const mapDispatch = {
  startUpdateAdditionalUserDataProcess: updateAdditionalUserDataRequest,
  stopUpdateAdditionalUserDataProcess: updateAdditionalUserDataCompleted,
};

type Props = {
  user: User;
  receiveOffers: boolean;
} & ReturnType<typeof mapState> &
  typeof mapDispatch;

type FormData = {
  specialOffers: boolean;
};

const Subscriptions = ({
  user,
  receiveOffers,
  isCompleted,
  statusText,
  startUpdateAdditionalUserDataProcess,
  stopUpdateAdditionalUserDataProcess,
}: Props): JSX.Element => {
  const onSubmit = ({ specialOffers }: FormData) => {
    startUpdateAdditionalUserDataProcess({ user, data: { receiveOffers: specialOffers } });
  };

  return (
    <S.Subscriptions>
      <S.Title>Новостные рассылки</S.Title>
      <Form
        initialValues={{ specialOffers: receiveOffers }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
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
            {isCompleted && (
              <PopUpNotification
                message={statusText}
                onConfirmButtonClick={stopUpdateAdditionalUserDataProcess}
              />
            )}
          </>
        )}
      />
    </S.Subscriptions>
  );
};

export default connect(mapState, mapDispatch)(Subscriptions);
