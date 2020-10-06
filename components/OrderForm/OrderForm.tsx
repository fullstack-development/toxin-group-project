import { Form } from 'react-final-form';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import TimePicker from 'components/TimePicker/TimePicker';

import PriceList from './components/PriceList/PriceList';
import * as S from './OrderForm.styles';

type Props = {
  roomNumber: number;
  roomType: string;
  price: number;
  currency?: string;
  measure?: string;
};

const handleFormSubmit = (values) => {
  // eslint-disable-next-line
  console.log(values)
};

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
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
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
          <S.PriceList>
            <PriceList
              items={[
                { label: '9 990₽ х 4 суток', price: 39960 },
                {
                  label: 'Сбор за услуги: скидка 2 179₽',
                  price: 0,
                  tooltip: 'Подсказка Подсказка Подсказка Подсказка 2',
                },
                { label: 'Сбор за дополнительные услуги', price: 300, tooltip: 'Подсказка 2' },
              ]}
            />
          </S.PriceList>
          <S.ResultWrapper>
            Итого
            <S.Dots />
            <S.ResultPrice>{38081}</S.ResultPrice>
          </S.ResultWrapper>
          <ArrowButton isLink={false} type="submit">
            Забронировать
          </ArrowButton>

          <div>{JSON.stringify(values)}</div>
        </form>
      )}
    />
  </S.Container>
);

export default OrderForm;
