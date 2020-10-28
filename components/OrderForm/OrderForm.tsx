import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Dropdown from 'components/Dropdown/Dropdown';
import { DropdownProps } from 'components/Dropdown/Dropdown.types';
import TimePicker from 'components/TimePicker/TimePicker';
import { formatNumber } from 'shared/helpers';
import i18next from 'shared/lang';

import PriceList from './components/PriceList/PriceList';
import * as S from './OrderForm.styles';
import { Item as PriceItem, MaxGuests } from './OrderForm.types';

type Props = {
  roomNumber: number;
  roomPrice: number;
  breakfastPricePerGuest: number;
  overcrowdingPrice: number;
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

const defaultPrices: PriceItem[] = [
  {
    label: `Сбор за услуги: скидка 2${'\u00A0'}179₽`,
    price: -2179,
    tooltip: 'Подсказка Подсказка Подсказка Подсказка 2',
  },
  { label: 'Сбор за дополнительные услуги', price: 300, tooltip: 'Подсказка 2' },
];

const defaultMaxGuests: MaxGuests = {
  adults: 3,
  babies: 2,
};

const possibleExtraGuestsCount = 1;

const noFeeGuestsCount = 1;

const dropdownOptions: DropdownProps = {
  placeholder: i18next.t('How many guests'),
  name: 'guests',
  enableControls: true,
  groups: [
    {
      name: 'guests',
      max: defaultMaxGuests.adults + possibleExtraGuestsCount,
      wordForms: [i18next.t('a guest'), i18next.t('guest'), i18next.t('guests')],
    },
  ],
  items: [
    {
      title: i18next.t('adults'),
      inputName: 'adults',
      groupName: 'guests',
    },
    {
      title: i18next.t('childrens'),
      inputName: 'children',
      groupName: 'guests',
    },
    {
      title: i18next.t('babies'),
      inputName: 'babies',
      max: defaultMaxGuests.babies,
      wordForms: [i18next.t('a baby'), i18next.t('baby'), i18next.t('babies')],
    },
  ],
};

const getResultPrice = (prices: PriceItem[]): number =>
  Math.max(
    prices.reduce((acc, el) => acc + el.price, 0),
    0,
  );

const getDaysDifference = (dates: { from: number; to: number }) =>
  Math.round(Math.abs((dates.to - dates.from) / oneDay));

const OrderForm: React.FC<Props> = ({
  roomNumber,
  roomType,
  roomPrice,
  priceItems,
  overcrowdingPrice,
  breakfastPricePerGuest,
  currency = 'RUB',
  measure = i18next.t('per day'),
}: Props) => {
  const { t } = useTranslation('OrderForm');

  return (
    <S.Container>
      <S.Title>{`${t('Room reservation')}#${roomNumber}`}</S.Title>
      <Form
        onSubmit={handleFormSubmit}
        render={({ handleSubmit, values }) => {
          const dates: { from: number; to: number } = values.booked;
          const daysDifference = (dates && getDaysDifference(dates)) || 0;
          const guests: {
            adults: number;
            babies: number;
          } = values.guests && {
            adults: values.guests.adults + values.guests.children,
            babies: values.guests.babies,
          };

          const totalGuestsCount = guests ? guests.adults : 0;
          const billableGuests = Math.max(totalGuestsCount - noFeeGuestsCount, 0);

          const prices = [
            {
              label: `${formatNumber(roomPrice, currency)} х ${daysDifference + t('days')}`,
              price: roomPrice * daysDifference,
            },
            {
              label: t('Fee for guests from the second'),
              price: breakfastPricePerGuest * billableGuests,
            },
            ...(priceItems || defaultPrices),
          ];

          const extraGuestFee = {
            label: t('Payment for an additional guest'),
            price: overcrowdingPrice,
          };

          if (totalGuestsCount > defaultMaxGuests.adults) {
            prices.push(extraGuestFee);
          }

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
                  dateFromLabelText={t('Arrival')}
                  dateToLabelText={t('Departure')}
                  name="booked"
                />
              </S.Datepicker>
              <S.Dropdown>
                <S.DropdownLabel>{t('guests')}</S.DropdownLabel>
                <Dropdown {...dropdownOptions} />
              </S.Dropdown>
              <S.PriceList>
                <PriceList items={prices} />
              </S.PriceList>
              <S.ResultWrapper>
                {t('Total')}
                <S.Dots />
                <S.ResultPrice>
                  <Field
                    type="hidden"
                    render={({ input }) => {
                      setTimeout(() => input.onChange(getResultPrice(prices)));
                      return <input {...input} />;
                    }}
                    name="totalPrice"
                  />
                  {formatNumber(getResultPrice(prices), currency)}
                </S.ResultPrice>
              </S.ResultWrapper>
              <ArrowButton type="submit">{t('Book now')}</ArrowButton>
            </form>
          );
        }}
      />
    </S.Container>
  );
};

export default OrderForm;
