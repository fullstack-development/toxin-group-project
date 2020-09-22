import SocialMediaLink from './components/SocialMediaLink';
import * as S from './SocialMedia.style';
import { SocialMediaItem } from './SocialMedia.types';

type SocialMediaProps = {
  items: SocialMediaItem[];
};

const defaultProps: SocialMediaItem[] = [
  {
    href: 'https://twitter.com',
    icon: 'twitter',
    text: 'Twitter',
  },
  {
    href: 'https://facebook.com',
    icon: 'facebook-square',
    text: 'Facebook',
  },
  {
    href: 'https://instagram.com',
    icon: 'instagram',
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
