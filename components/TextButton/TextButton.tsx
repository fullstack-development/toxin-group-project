import * as S from './TextButton.styles';
import { TextButtonProps } from './TextButton.types';

const TextButton: React.FC<TextButtonProps> = ({
  isSecondary = false,
  isLink,
  ...rest
}: TextButtonProps) => (
  <S.TextButton as={isLink ? 'a' : 'button'} {...rest} isSecondary={isSecondary} isLink={isLink} />
);

export default TextButton;
