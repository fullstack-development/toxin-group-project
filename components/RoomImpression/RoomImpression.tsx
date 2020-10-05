import { PieChart } from 'react-minimal-pie-chart';

import ratingValues from './RoomImpression.data';
import * as S from './RoomImpression.styles';
import { Props } from './RoomImpression.types';

const RoomImpression: React.FC<Props> = ({ title, numberOfRatings }: Props) => (
  <S.RoomImpression>
    <S.Title>{title}</S.Title>
    <S.Figure>
      <S.PieChartWrapper>
        <S.ReviewsCounter>
          {Object.values(numberOfRatings).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
          )}
          <S.ReviewsCounterText>Голосов</S.ReviewsCounterText>
        </S.ReviewsCounter>
        <PieChart
          data={[
            {
              title: ratingValues.excellent,
              value: numberOfRatings.excellent,
              color: 'url(#gradient1)',
            },
            { title: ratingValues.good, value: numberOfRatings.good, color: 'url(#gradient2)' },
            { title: ratingValues.normal, value: numberOfRatings.normal, color: 'url(#gradient3)' },
            { title: ratingValues.bad, value: numberOfRatings.bad, color: 'url(#gradient4)' },
          ]}
          startAngle={92}
          lineWidth={8}
          paddingAngle={2}
        >
          <defs>
            <linearGradient id="gradient1" x1="60" y1="0" x2="60" y2="120">
              <stop offset="0" stopColor="#FFE39C" />
              <stop offset="1" stopColor="#FFBA9C" />
            </linearGradient>
            <linearGradient id="gradient2" x1="60" y1="0" x2="60" y2="120">
              <stop offset="0" stopColor="#BC9CFF" />
              <stop offset="1" stopColor="#8BA4F9" />
            </linearGradient>
            <linearGradient id="gradient3" x1="60" y1="0" x2="60" y2="120">
              <stop offset="0" stopColor="#6FCF97" />
              <stop offset="1" stopColor="#66D2EA" />
            </linearGradient>
            <linearGradient id="gradient4" x1="60" y1="0" x2="60" y2="120">
              <stop offset="0" stopColor="#919191" />
              <stop offset="1" stopColor="#3D4975" />
            </linearGradient>
          </defs>
        </PieChart>
      </S.PieChartWrapper>
      <S.FigureCaption>
        <S.List>
          {Object.values(ratingValues).map((value) => (
            <S.Item key={value}>{value}</S.Item>
          ))}
        </S.List>
      </S.FigureCaption>
    </S.Figure>
  </S.RoomImpression>
);

export default RoomImpression;
