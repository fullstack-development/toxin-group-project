import { AssistantActions, AssistantState } from '../model';

const initialState = {
  messages: [
    {
      author: 'Евгений',
      type: 'to',
      text:
        'Здравствуйте, меня зовут бот Евгений. Напишите мне ваши пожелания, либо вопрос, и я с радостью постараюсь помочь вам !',
    },
  ],
};

const assistant = (state = initialState, action: AssistantActions): AssistantState => {
  switch (action.type) {
    case 'PUSH_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export { assistant };
