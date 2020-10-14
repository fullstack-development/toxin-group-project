import Link from 'next/link';

import * as S from './TextButton.styles';
import { TextButtonProps } from './TextButton.types';

const TextButton: React.FC<TextButtonProps> = ({
  isSecondary = false,
  href,
  ...rest
}: TextButtonProps) =>
  href ? (
    <Link href={href} passHref>
      <S.TextButton as="a" {...rest} isSecondary={isSecondary} />
    </Link>
  ) : (
    <S.TextButton as="button" {...rest} isSecondary={isSecondary} />
  );

export default TextButton;
