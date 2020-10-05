import { Form } from 'react-final-form';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import TimePicker from 'components/TimePicker/TimePicker';

import * as S from './OrderForm.styles';

type Props = {
  roomNumber: number;
  roomType: string;
  price: number;
  currency?: string;
  measure?: string;
};

const handleFormSubmit = () => {};

const OrderForm: React.FC<Props> = ({
  roomNumber,
  roomType,
  price,
  currency = '₽',
  measure = 'в сутки',
}: Props) => (
  <S.Container>
    <S.Title>Бронирование номера №{roomNumber}</S.Title>
    <Form
      onSubmit={handleFormSubmit}
      render={() => (
        <form>
          <S.RoomInfo>
            <S.RoomNumber>
              <S.NumberSign>№</S.NumberSign>
              {roomNumber}
              {roomType && <S.RoomType>{roomType}</S.RoomType>}
            </S.RoomNumber>
            <S.Price>
              {price}
              {currency}
              <S.Measure>{measure}</S.Measure>
            </S.Price>
          </S.RoomInfo>
          <S.Datepicker>
            <TimePicker
              type="double"
              dateFromLabelText="Прибытие"
              dateToLabelText="Выезд"
              labelName="order-form"
            />
          </S.Datepicker>
          <S.Dropdown>
            <S.DropdownLabel>гости</S.DropdownLabel>
            <Dropdown
              placeholder="Сколько гостей"
              name="guests"
              enableControls
              groups={[
                {
                  name: 'guests',
                  wordForms: ['гость', 'гостя', 'гостей'],
                },
              ]}
              items={[
                {
                  title: 'взрослые',
                  groupName: 'guests',
                },
                {
                  title: 'дети',
                  groupName: 'guests',
                },
                {
                  title: 'младенцы',
                  wordForms: ['младенец', 'младенца', 'младенцев'],
                },
              ]}
            />
          </S.Dropdown>
          <ArrowButton isLink={false} type="submit">
            Забронировать
          </ArrowButton>
        </form>
      )}
    />
  </S.Container>
);

export default OrderForm;
