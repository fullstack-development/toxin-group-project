import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import { Apartment } from 'api/entities/types';
import Benefits from 'components/Benefits/Benefits';
import BulletList from 'components/BulletList/BulletList';
import OrderForm from 'components/OrderForm/OrderForm';
import Preloader from 'components/Preloader/Preloader';
import Reviews from 'components/Reviews/Reviews';
import RoomImpression from 'components/RoomImpression/RoomImpression';
import { getRoomDetails as getRoomDetailsRequest } from 'redux/Apartment/redux/actions';
import { AppState } from 'redux/store.types';

import { roomImagesPreview, benefitsData, rulesData } from './MainContent.data';
import * as S from './MainContent.styles';

type StateProps = {
  roomDetails: Apartment;
};

const mapState = (state: AppState): StateProps => ({
  roomDetails: state.apartment.roomDetails,
});

const mapDispatch = {
  startGetRoomDetails: getRoomDetailsRequest,
};

type Props = StateProps & typeof mapDispatch;

const MainContent = ({ roomDetails, startGetRoomDetails }: Props): JSX.Element => {
  const router = useRouter();
  const roomNumber = router.asPath.split('=')[1];

  const getRoomDetails = useCallback(
    (id) => {
      startGetRoomDetails(id);
    },
    [startGetRoomDetails],
  );

  useEffect(() => {
    getRoomDetails(roomNumber);
  }, [getRoomDetails, roomNumber]);

  return (
    <>
      {roomDetails ? (
        <S.MainContent>
          <S.RoomImages>
            {roomImagesPreview.map(({ src, alt }) => (
              <img key={src} src={src} alt={alt} />
            ))}
          </S.RoomImages>
          <S.Details>
            <S.Benefits>
              <S.Title>Сведения о номере</S.Title>
              <Benefits items={benefitsData} />
            </S.Benefits>
            <S.RoomImpressionWrapper>
              {roomDetails && (
                <RoomImpression
                  title="Впечатления от номера"
                  numberOfRatings={roomDetails.numberOfRatings}
                />
              )}
            </S.RoomImpressionWrapper>
            <S.ReviewsWrapper>
              {roomDetails && <Reviews reviews={roomDetails.reviews} />}
            </S.ReviewsWrapper>
            <S.BulletList>
              <S.Title>Правила</S.Title>
              <BulletList items={rulesData} />
            </S.BulletList>
            <S.CancellationTerms>
              <S.Title>Отмена</S.Title>
              <S.CancellationTermsText>
                Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до
                прибытия вы получите полный возврат за вычетом сбора за услуги.
              </S.CancellationTermsText>
            </S.CancellationTerms>
            <S.OrderFormWrapper>
              {roomDetails && (
                <OrderForm
                  overcrowdingPrice={roomDetails.overcrowdingPrice}
                  breakfastPricePerGuest={roomDetails.breakfastPricePerGuest}
                  roomNumber={roomDetails.id}
                  roomType={roomDetails.class}
                  roomPrice={roomDetails.price}
                />
              )}
            </S.OrderFormWrapper>
          </S.Details>
        </S.MainContent>
      ) : (
        <S.PreloaderWrapper>
          <Preloader label="Загрузка информации о номере..." />
        </S.PreloaderWrapper>
      )}
    </>
  );
};

export default connect(mapState, mapDispatch)(MainContent);
