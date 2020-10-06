import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState } from 'react';

import * as S from './LikeButton.styles';

type LikeButtonProps = {
  count: number;
  isActive?: boolean;
  onCheckboxChange?: (e: React.ChangeEvent) => void;
};

const LikeButton: React.FC<LikeButtonProps> = (props: LikeButtonProps) => {
  const { count, isActive } = props;
  const [likesCount, setLikesCount] = useState(count || 0);
  const [isLikeButtonPressed, setLikeButtonStatus] = useState(isActive || false);

  const handleLikeButtonClick = () => {
    setLikeButtonStatus(!isLikeButtonPressed);

    const newLikesCount = isLikeButtonPressed ? likesCount - 1 : likesCount + 1;
    setLikesCount(newLikesCount);
  };

  return (
    <S.LikeLabel isActive={isLikeButtonPressed}>
      <FavoriteIcon />
      <S.LikeSpan>{likesCount}</S.LikeSpan>
      <S.LikeInput type="checkbox" onChange={handleLikeButtonClick} checked={isLikeButtonPressed} />
      <S.LikeOutline />
    </S.LikeLabel>
  );
};

export default LikeButton;
