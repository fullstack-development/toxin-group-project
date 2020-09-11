import React, { useState } from 'react';

import LikeButton from './LikeButton';

type LikeButtonContainer = {
  isPressedButton?: boolean;
  likes?: number;
}

const LikeButtonContainer: React.FC<LikeButtonContainer> = (props: LikeButtonContainer) => {
  const { likes, isPressedButton } = props;
  const [likesCount, setLikesCount] = useState(likes || 0);
  const [isLikeButtonPressed, setLikeButtonStatus] = useState(isPressedButton || false);

  const handleLikeButtonClick = () => {
    setLikeButtonStatus(!isLikeButtonPressed);

    const newLikesCount = isLikeButtonPressed ? likesCount - 1 : likesCount + 1;
    setLikesCount(newLikesCount);
  };

  return (
    <LikeButton
      count={likesCount}
      isActive={isLikeButtonPressed}
      onCheckboxChange={handleLikeButtonClick}
    />
  );
};

export default LikeButtonContainer;
