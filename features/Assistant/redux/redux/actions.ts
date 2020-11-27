import { MessageData, SendMessage, PushMessage } from '../model';

const sendMessage = (data: MessageData): SendMessage => ({
  type: 'SEND_MESSAGE',
  payload: data,
});

const pushMessage = (data: MessageData): PushMessage => ({
  type: 'PUSH_MESSAGE',
  payload: data,
});

export { sendMessage, pushMessage };
