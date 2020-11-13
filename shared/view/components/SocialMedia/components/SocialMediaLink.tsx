import { SocialMediaItem } from '../SocialMedia.types';
import * as S from './SocialMediaLink.styles';

const SocialMediaLink: React.FC<SocialMediaItem> = ({ href, icon, text }: SocialMediaItem) => (
  <S.Link target="_blank" rel="noopener noreferrer" icon={icon} text={text} href={href}>
    <S.Label>{text}</S.Label>
  </S.Link>
);

export { SocialMediaLink };
