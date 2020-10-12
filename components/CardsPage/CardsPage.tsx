import React from 'react';

import AccountEntry from 'components/AccountEntry/AccountEntry';
import ForgotPasswordForm from 'components/ForgotPasswordForm/ForgotPasswordForm';
import OrderForm from 'components/OrderForm/OrderForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Room from 'components/Room/Room';
import SearchRoomForm from 'components/SearchRoomForm/SearchRoomForm';

import * as S from './CardsPage.styles';

const CardsPage: React.FC = (): JSX.Element => (
  <S.Container>
    <SearchRoomForm />
    <OrderForm roomNumber={888} roomType="люкс" roomPrice={9990} />
    <Room price="9 900" number={888} reviewCount={65} reviewsHref="/mock" href="/mock" />
    <Room
      price="9 900"
      number={888}
      reviewCount={65}
      reviewsHref="/mock"
      href="/mock"
      roomType="люкс"
    />
    <S.SearchRoomFormWrapper>
      <SearchRoomForm />
    </S.SearchRoomFormWrapper>
    <S.RegistrationFormWrapper>
      <RegistrationForm />
    </S.RegistrationFormWrapper>
    <S.AccountEntryWrapper>
      <AccountEntry />
    </S.AccountEntryWrapper>
    <S.ForgotPasswordWrapper>
      <ForgotPasswordForm />
    </S.ForgotPasswordWrapper>
  </S.Container>
);

export default CardsPage;
