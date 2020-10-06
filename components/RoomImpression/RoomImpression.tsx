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
            <linearGradient id="gradient1" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0" stopColor="#ffe39c" />
              <stop offset="1" stopColor="#ffba9c" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0" stopColor="#bc9cff" />
              <stop offset="1" stopColor="#8ba4f9" />
            </linearGradient>
            <linearGradient id="gradient3" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0" stopColor="#6fcf97" />
              <stop offset="1" stopColor="#66d2ea" />
            </linearGradient>
            <linearGradient id="gradient4" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0" stopColor="#919191" />
              <stop offset="1" stopColor="#3d4975" />
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
