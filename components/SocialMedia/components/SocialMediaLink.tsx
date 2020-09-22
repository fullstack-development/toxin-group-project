import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialMediaItem } from '../SocialMedia.types';
import * as S from './SocialMediaLink.styles';

const SocialMediaLink: React.FC<SocialMediaItem> = ({ href, icon, text }: SocialMediaItem) => (
  <S.Link href={href}>
    <FontAwesomeIcon icon={icon} />
    <S.Label>{text}</S.Label>
  </S.Link>
);

export default SocialMediaLink;
