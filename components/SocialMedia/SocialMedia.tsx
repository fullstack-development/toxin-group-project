import SocialMediaLink from './components/SocialMediaLink';
import defaultProps from './SocialMedia.fuxure';
import { SocialMediaProps } from './SocialMedia.model';
import * as S from './SocialMedia.style';

const SocialMedia: React.FC<SocialMediaProps> = ({ items = defaultProps }: SocialMediaProps) => (
  <S.List>
    {items &&
      items.map((item) => (
        <S.ListItem key={item.href}>
          <SocialMediaLink {...item} />
        </S.ListItem>
      ))}
  </S.List>
);

export default SocialMedia;
