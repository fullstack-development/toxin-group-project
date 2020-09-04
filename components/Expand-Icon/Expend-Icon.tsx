import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

import * as S from './Expand-Icon.styles';

type Props = {
  direction: 'more' | 'less';
};

const ExpandIcon: React.FC<Props> = ({ direction }: Props) => (
  <S.Icon>
    { direction === 'more' ? <ExpandMore /> : <ExpandLess /> }
  </S.Icon>
);

export default ExpandIcon;
