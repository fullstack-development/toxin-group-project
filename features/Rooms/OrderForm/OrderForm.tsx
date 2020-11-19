import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { bookRoom, cancelBooking as cancelBookingRequest } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { Dropdown, TimePicker } from 'shared/view/components';
import { DropdownProps } from 'shared/view/components/Dropdown/Dropdown.model';
import { PopUpNotification } from 'shared/view/components/PopUpNotification/PopUpNotification';
import { ArrowButton } from 'shared/view/elements';
import { formatNumber } from 'utils/number.utils';

import { PriceList } from './components/PriceList/PriceList';
import { PriceItem, MaxGuests } from './OrderForm.model';
import * as S from './OrderForm.styles';

type StateProps = {
  isPending: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.booking.isBookingPending,
  isSuccess: state.booking.isBookingSuccess,
  isFailed: state.booking.isBookingFailed,
  statusText: state.booking.bookingStatusText,
});

const mapDispatch = {
  confirmBookedRoom: bookRoom,
  cancelBooking: cancelBookingRequest,
};

type OwnProps = {
  roomNumber: number;
  roomPrice: number;
  breakfastPricePerGuest: number;
  overcrowdingPrice: number;
  isAuthSuccess: boolean;
  priceItems?: PriceItem[];
  roomType?: string;
  currency?: string;
  measure?: string;
  userEmail?: string;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const oneDay = 24 * 60 * 60 * 1000;

const defaultMaxGuests: MaxGuests = {
  adults: 3,
  babies: 2,
};

const possibleExtraGuestsCount = 1;

const noFeeGuestsCount = 1;

const dropdownOptions: DropdownProps = {
  placeholder: 'RoomFilter:How many guests',
  name: 'Guests',
  enableControls: true,
  groups: [
    {
      name: 'Guests',
      max: defaultMaxGuests.adults + possibleExtraGuestsCount,
      wordForms: ['Guest', 'GuestsSecondary', 'Guests'],
    },
  ],
  items: [
    {
      title: 'Adults',
      inputName: 'Adults',
      groupName: 'Guests',
    },
    {
      title: 'Children',
      inputName: 'Children',
      groupName: 'Guests',
    },
    {
      title: 'Babies',
      inputName: 'Babies',
      max: defaultMaxGuests.babies,
      wordForms: ['Baby', 'Babies', 'BabiesSecondary'],
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

const OrderForm = memo(
  ({
    roomNumber,
    roomType,
    roomPrice,
    priceItems,
    overcrowdingPrice,
    breakfastPricePerGuest,
    isAuthSuccess,
    currency = 'RUB',
    measure = 'Per day',
    userEmail,
    isPending,
    isSuccess,
    isFailed,
    statusText,
    confirmBookedRoom,
    cancelBooking,
  }: Props) => {
    const { t } = useTranslation([
      'OrderForm',
      'WordForms',
      'SearchRoomForm',
      'Shared',
      'OrderFormPrices',
    ]);

    const defaultPrices: PriceItem[] = [
      {
        label: `${t(`OrderFormPrices:Service fee_discount`)} 2${'\u00A0'}179₽`,
        price: -2179,
        tooltip: 'Подсказка Подсказка Подсказка Подсказка 2',
      },
      { label: t('OrderFormPrices:Additional service fee'), price: 300, tooltip: 'Подсказка 2' },
    ];

    const router = useRouter();

    const handleFormSubmit = (values) => {
      if (!isAuthSuccess) router.push('/auth');

      confirmBookedRoom({
        ...values,
        user: userEmail,
        apartmentId: roomNumber,
      });
    };

    useEffect(() => {
      if (isSuccess) router.push('/selected-rooms');
    }, [isSuccess, router]);

    return (
      <>
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
                      <S.Measure>{t(`WordForms:${measure}`)}</S.Measure>
                    </S.Price>
                  </S.RoomInfo>
                  <S.Datepicker>
                    <TimePicker
                      type="double"
                      dateFromLabelText={t('SearchRoomForm:Arrival')}
                      dateToLabelText={t('SearchRoomForm:Departure')}
                      name="booked"
                    />
                  </S.Datepicker>
                  <S.Dropdown>
                    <S.DropdownLabel>{t('RoomFilter:Guests')}</S.DropdownLabel>
                    <Dropdown {...dropdownOptions} />
                  </S.Dropdown>
                  <S.PriceList>
                    <PriceList items={prices} />
                  </S.PriceList>
                  <S.ResultWrapper>
                    {t('Shared:Total')}
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
                  <ArrowButton disabled={isPending} type="submit">
                    {t('OrderForm:Book now')}
                  </ArrowButton>
                </form>
              );
            }}
          />
        </S.Container>
        {isFailed && (
          <PopUpNotification
            message={t(`OrderForm:${statusText}`)}
            onConfirmButtonClick={cancelBooking}
          />
        )}
      </>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(OrderForm);
export { ConnectedComponent as OrderForm };
