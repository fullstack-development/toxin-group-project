import { Timestamp } from 'api/Firebase/modules/Database/types';

type Props = {
  avatarUrl: string;
  userName: string;
  date: Timestamp;
  text: string;
  likesCount: number;
};

export type { Props };
