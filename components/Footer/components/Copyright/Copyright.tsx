import { CopyrightProps } from '../../Footer.types';
import * as S from './Copyright.styles';

const Copyright: React.FC<CopyrightProps> = ({ copyrightText }: CopyrightProps) => (
  <S.Copyright>{copyrightText}</S.Copyright>
);

export default Copyright;
