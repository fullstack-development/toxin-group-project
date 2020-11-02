import { Avatar as MaterialAvatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  photoURL: string;
  width?: string;
  height?: string;
};

const Avatar: React.FC<Props> = ({
  photoURL,
  width = '7.1428rem',
  height = '7.1428rem',
}: Props) => {
  const useStyles = makeStyles(() => ({ sizes: { width, height } }));
  const classes = useStyles();

  return <MaterialAvatar src={photoURL} className={classes.sizes} component="div" />;
};

export default Avatar;
