import * as S from './DotButton.styles';
import { DotButtonProps } from './DotButton.model';

const DotButton: React.FC<DotButtonProps> = (props: DotButtonProps) => {
  return <S.DotButton {...props} type="button" />;
};

export default DotButton;
