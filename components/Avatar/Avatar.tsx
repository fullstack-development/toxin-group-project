import { Avatar as MaterialAvatar } from '@material-ui/core';

type Props = {
  photoURL: string;
  width?: string;
  height?: string;
};

const Avatar: React.FC<Props> = ({ photoURL, width = '100px', height = '100px' }: Props) => (
  <MaterialAvatar src={photoURL} style={{ height: width, width: height }} component="div" />
);

export default Avatar;
