import { Form } from 'react-final-form';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import { DropdownProps } from 'components/Dropdown/Dropdown.types';
import TimePicker from 'components/TimePicker/TimePicker';
import { formatNumber } from 'shared/helpers';

import PriceList from './components/PriceList/PriceList';
import * as S from './OrderForm.styles';
import { Item as PriceItem } from './OrderForm.types';

type Props = {
  roomNumber: number;
  roomPrice: number;
  priceItems?: PriceItem[];
  roomType?: string;
  currency?: string;
  measure?: string;
};

const handleFormSubmit = (values) => {
  // eslint-disable-next-line
  console.log(values)
};
const oneDay = 24 * 60 * 60 * 1000;

const defaultOptions: PriceItem[] = [
  {
    label: `Сбор за услуги: скидка 2${'\u00A0'}179₽`,
    price: -2179,
    tooltip: 'Подсказка Подсказка Подсказка Подсказка 2',
  },
  { label: 'Сбор за дополнительные услуги', price: 300, tooltip: 'Подсказка 2' },
];

const dropdownOptions: DropdownProps = {
  placeholder: 'Сколько гостей',
  name: 'guests',
  enableControls: true,
  groups: [
    {
      name: 'guests',
      wordForms: ['гость', 'гостя', 'гостей'],
    },
  ],
  items: [
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
  ],
};

const getResultPrice = (prices: PriceItem[], currency: string): string =>
  formatNumber(
    Math.max(
      prices.reduce((acc, el) => acc + el.price, 0),
      0,
    ),
    currency,
  );

const getDaysDifference = (dates: { from: number; to: number }) =>
  Math.round(Math.abs((dates.to - dates.from) / oneDay));

const OrderForm: React.FC<Props> = ({
  roomNumber,
  roomType,
  roomPrice,
  priceItems,
  currency = 'RUB',
  measure = 'в сутки',
}: Props) => (
  <S.Container>
    <S.Title>Бронирование номера №{roomNumber}</S.Title>
    <Form
      onSubmit={handleFormSubmit}
      render={({ handleSubmit, values }) => {
        const dates = values['order-form'];
        const daysDifference = (dates && getDaysDifference(dates)) || 0;
        const prices = [
          {
            label: `${formatNumber(roomPrice, currency)} х ${daysDifference} суток`,
            price: roomPrice * daysDifference,
          },
          ...(priceItems || defaultOptions),
        ];
        return (
          <form onSubmit={handleSubmit}>
            <S.RoomInfo>
              <S.RoomNumber>
                <S.NumberSign>№</S.NumberSign>
                {roomNumber}
                {roomType && <S.RoomType>{roomType}</S.RoomType>}
              </S.RoomNumber>
              <S.Price>
                {formatNumber(roomPrice, currency)}
                <S.Measure>{measure}</S.Measure>
              </S.Price>
            </S.RoomInfo>
            <S.Datepicker>
              <TimePicker
                type="double"
                dateFromLabelText="Прибытие"
                dateToLabelText="Выезд"
                name="order-form"
              />
            </S.Datepicker>
            <S.Dropdown>
              <S.DropdownLabel>гости</S.DropdownLabel>
              <Dropdown {...dropdownOptions} />
            </S.Dropdown>
            <S.PriceList>
              <PriceList items={prices} />
            </S.PriceList>
            <S.ResultWrapper>
              Итого
              <S.Dots />
              <S.ResultPrice>{getResultPrice(prices, currency)}</S.ResultPrice>
            </S.ResultWrapper>
            <ArrowButton isLink={false} type="submit">
              Забронировать
            </ArrowButton>
          </form>
        );
      }}
    />
  </S.Container>
);

export default OrderForm;
