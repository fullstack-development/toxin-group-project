import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';

import * as S from './NavAccountSettings.styles';

type Props = {
  title: string;
};

const NavAccountSettings = ({ title }: Props): JSX.Element => (
  <S.NavAccountSettings>
    <Link href="/profile" passHref>
      <S.Link>Аккаунт</S.Link>
    </Link>
    <NavigateNextIcon />
    {title}
  </S.NavAccountSettings>
);

export { NavAccountSettings };
