import * as S from './TextButton.styles';

type TextButtonProps = {
  text: string;
  link?: string;
}

const TextButton : React.FC<TextButtonProps> = ({ text, link }: TextButtonProps) => (link ? (
  <S.TextLink href={link}>{text}</S.TextLink>
) : (
  <S.TextButton>{text}</S.TextButton>
));

export default TextButton;
