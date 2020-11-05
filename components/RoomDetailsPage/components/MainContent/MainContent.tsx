import { useTranslation } from 'react-i18next';

import Benefits from 'components/Benefits/Benefits';
import BulletList from 'components/BulletList/BulletList';
import OrderForm from 'components/OrderForm/OrderForm';
import Reviews from 'components/Reviews/Reviews';
import RoomImpression from 'components/RoomImpression/RoomImpression';

import { roomImagesPreview, benefitsData, rulesData } from './MainContent.data';
import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => {
  const { t } = useTranslation('MainContent');

  return (
    <S.MainContent>
      <S.RoomImages>
        {roomImagesPreview.map(({ src, alt }) => (
          <img key={src} src={src} alt={alt} />
        ))}
      </S.RoomImages>
      <S.Details>
        <S.Benefits>
          <S.Title>{t('Room details')}</S.Title>
          <Benefits items={benefitsData} />
        </S.Benefits>
        <S.RoomImpressionWrapper>
          <RoomImpression
            title={t('Impressions of the room')}
            numberOfRatings={{ excellent: 130, good: 65, normal: 65, bad: 0 }}
          />
        </S.RoomImpressionWrapper>
        <S.ReviewsWrapper>
          <Reviews />
        </S.ReviewsWrapper>
        <S.BulletList>
          <S.Title>{t('Rules')}</S.Title>
          <BulletList items={rulesData} />
        </S.BulletList>
        <S.CancellationTerms>
          <S.Title>{t('Cancel')}</S.Title>
          <S.CancellationTermsText>
            {t(
              'Thereafter you will get a full refund minus the service fee if the reservation is canceled 5 days or more prior to the arrival date',
            )}
          </S.CancellationTermsText>
        </S.CancellationTerms>
        <S.OrderFormWrapper>
          <OrderForm
            overcrowdingPrice={700}
            breakfastPricePerGuest={300}
            roomNumber={888}
            roomType={t('luxury')}
            roomPrice={9990}
          />
        </S.OrderFormWrapper>
      </S.Details>
    </S.MainContent>
  );
};

export default MainContent;
