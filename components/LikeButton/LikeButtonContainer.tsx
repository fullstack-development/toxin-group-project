import React, { useState } from 'react';
import LikeButton from './LikeButton';

const LikeButtonContainer = () => {
  const [likesCount, setLikesCount] = useState(0);
  const [isLikeButtonPressed, setLikeButtonStatus] = useState(false);

  const handleLikeButtonClick = () => {
    setLikeButtonStatus(!isLikeButtonPressed);

    if (isLikeButtonPressed) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
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
