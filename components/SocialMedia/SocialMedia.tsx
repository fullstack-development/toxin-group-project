import { memo } from 'react';

import SocialMediaLink from './components/SocialMediaLink';
import defaultProps from './defaultProps';
import * as S from './SocialMedia.style';
import { SocialMediaProps } from './SocialMedia.types';

const SocialMedia = memo(({ items = defaultProps }: SocialMediaProps) => (
  <S.List>
    {items &&
      items.map((item) => (
        <S.ListItem key={item.href}>
          <SocialMediaLink {...item} />
        </S.ListItem>
      ))}
  </S.List>
));

export default SocialMedia;
