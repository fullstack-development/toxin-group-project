import * as S from './Banner.styles';

type BannerProps = {
  message: string;
};

const Banner: React.FC<BannerProps> = ({ message }: BannerProps): JSX.Element => (
  <S.Banner>
    <S.Message>{message}</S.Message>
  </S.Banner>
);

export default Banner;
