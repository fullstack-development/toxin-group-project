import { DotButtonProps } from './DotButton.model';
import * as S from './DotButton.styles';

const DotButton: React.FC<DotButtonProps> = (props: DotButtonProps) => {
  return <S.DotButton {...props} type="button" />;
};

export default DotButton;
