import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

import { Icon } from './Expand-Icon.styles';

type Props = {
  direction: 'more' | 'less';
};

const ExpandIcon: React.FC<Props> = ({ direction }: Props) => (
  <Icon>
    { direction === 'more' ? <ExpandMore /> : <ExpandLess /> }
  </Icon>
);

export default ExpandIcon;
