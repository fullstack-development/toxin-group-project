import FavoriteIcon from '@material-ui/icons/Favorite';
import * as S from './LikeButton.styles';

type LikeButtonProps = {
  count: number,
  isActive: boolean,
  onCheckboxChange: (e: React.ChangeEvent) => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  count,
  isActive,
  onCheckboxChange,
}: LikeButtonProps) => (
  <S.LikeLabel isActive={isActive}>
    <FavoriteIcon />
    <S.LikeSpan>
      {count}
    </S.LikeSpan>
    <S.LikeInput type="checkbox" onChange={onCheckboxChange} />
  </S.LikeLabel>
);

export default LikeButton;
