import { TextButtonProps } from './interfaces';
import * as S from './TextButton.styles';

const TextButton: React.FC<TextButtonProps> = ({
  isSecondary = false,
  isLink,
  ...rest
}: TextButtonProps) => (
  <S.TextButton
    as={isLink ? 'a' : 'button'}
    {...rest}
    isSecondary={isSecondary}
    isLink={isLink}
  />
);

export default TextButton;
