import { ActionPayload } from 'redux/action.model';

type MessageData = { author: string; text: string; type: 'from' | 'to' };

type SendMessage = ActionPayload<'SEND_MESSAGE', MessageData>;
type PushMessage = ActionPayload<'PUSH_MESSAGE', MessageData>;

type AssistantState = {
  messages: MessageData[];
};

type AssistantActions = PushMessage;

export type { MessageData, SendMessage, PushMessage, AssistantState, AssistantActions };
