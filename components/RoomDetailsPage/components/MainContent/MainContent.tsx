import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import Benefits from 'components/Benefits/Benefits';
import BulletList from 'components/BulletList/BulletList';
import OrderForm from 'components/OrderForm/OrderForm';
import Reviews from 'components/Reviews/Reviews';
import RoomImpression from 'components/RoomImpression/RoomImpression';
import { getRoomDetailsRequest } from 'redux/GetRoomDetails/redux/actions';
import { AppState } from 'redux/store.types';

import { roomImagesPreview } from './MainContent.data';
import * as S from './MainContent.styles';

const mapState = (state: AppState) => ({
  ...state.getRoomDetailsReducer,
});

const mapDispatch = {
  startGetRoomDetailsProcess: getRoomDetailsRequest,
};

type Props = ReturnType<typeof mapState> & typeof mapDispatch;

const MainContent = ({ roomDetails, startGetRoomDetailsProcess }: Props): JSX.Element => {
  const handlerGetRoomDetails = useCallback(
    (id) => {
      startGetRoomDetailsProcess(id);
    },
    [startGetRoomDetailsProcess],
  );

  useEffect(() => {
    handlerGetRoomDetails(28);
  }, [handlerGetRoomDetails]);

  return (
    <S.MainContent>
      <S.RoomImages>
        {roomImagesPreview.map(({ src, alt }) => (
          <img key={src} src={src} alt={alt} />
        ))}
      </S.RoomImages>
      <S.Details>
        <S.Benefits>
          <S.Title>Сведения о номере</S.Title>
          <Benefits
            items={[
              { icon: 'insert_emoticon', title: 'Комфорт', description: 'Шумопоглощающие стены' },
              { icon: 'location_city', title: 'Удобство', description: 'Окно в каждой из спален' },
              { icon: 'whatshot', title: 'Уют', description: 'Номер оснащён камином' },
            ]}
          />
        </S.Benefits>
        <S.RoomImpressionWrapper>
          <RoomImpression
            title="Впечатления от номера"
            numberOfRatings={{ excellent: 130, good: 65, normal: 65, bad: 0 }}
          />
        </S.RoomImpressionWrapper>
        <S.ReviewsWrapper>
          <Reviews />
        </S.ReviewsWrapper>
        <S.BulletList>
          <S.Title>Правила</S.Title>
          <BulletList
            items={[
              'Нельзя с питомцами',
              'Без вечеринок и мероприятий',
              'Время прибытия — после 13:00, а выезд до 12:00',
            ]}
          />
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
  );
};

export default connect(mapState, mapDispatch)(MainContent);
