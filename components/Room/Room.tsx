import * as S from './Room.styles';

type RoomProps = {
  price: number;
  number: number;
  measure?: string;
  currency?: string;
};

const Room: React.FC<RoomProps> = ({
  price,
  number,
  measure = 'в сутки',
  currency = '₽',
}: RoomProps) => (
  <S.Room>
    <S.Info>
      <S.Container>
        <S.RoomNumber>
          <S.NumberSign>№</S.NumberSign>
          {number}
        </S.RoomNumber>
        <S.Price>
          {`${price}${currency}`}
          <S.Measure>{measure}</S.Measure>
        </S.Price>
      </S.Container>
    </S.Info>
  </S.Room>
);

export default Room;
