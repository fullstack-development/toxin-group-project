import * as S from './DotButton.styles';
import { DotButtonProps } from './DotButton.types';

const DotButton: React.FC<DotButtonProps> = (props: DotButtonProps) => {
  return <S.DotButton {...props} />;
};

export default DotButton;
