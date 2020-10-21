import Benefits from 'components/Benefits/Benefits';
import BulletList from 'components/BulletList/BulletList';
import OrderForm from 'components/OrderForm/OrderForm';
import Reviews from 'components/Reviews/Reviews';
import RoomImpression from 'components/RoomImpression/RoomImpression';

import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => (
  <S.MainContent>
    <S.RoomImages>
      <img src="/img/room-image-preview-1.jpg" alt="Представление номера" />
      <img src="/img/room-image-preview-2.jpg" alt="Представление номера" />
      <img src="/img/room-image-preview-3.jpg" alt="Представление номера" />
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
        <OrderForm
          overcrowdingPrice={700}
          breakfastPricePerGuest={300}
          roomNumber={888}
          roomType="люкс"
          roomPrice={9990}
        />
      </S.OrderFormWrapper>
    </S.Details>
  </S.MainContent>
);

export default MainContent;
