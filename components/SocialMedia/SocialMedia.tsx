import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import SocialMediaLink from './components/SocialMediaLink';
import * as S from './SocialMedia.style';
import { SocialMediaItem } from './SocialMedia.types';

type SocialMediaProps = {
  items: SocialMediaItem[];
};

const defaultProps: SocialMediaItem[] = [
  {
    href: 'https://twitter.com',
    icon: faTwitter,
    text: 'Twitter',
  },
  {
    href: 'https://facebook.com',
    icon: faFacebookSquare,
    text: 'Facebook',
  },
  {
    href: 'https://instagram.com',
    icon: faInstagram,
    text: 'Instagram',
  },
];

const SocialMedia: React.FC<SocialMediaProps> = ({ items = defaultProps }: SocialMediaProps) => {
  return (
    <S.List>
      {items &&
        items.map((item) => (
          <S.ListItem key={item.href}>
            <SocialMediaLink {...item} />
          </S.ListItem>
        ))}
    </S.List>
  );
};

export default SocialMedia;
