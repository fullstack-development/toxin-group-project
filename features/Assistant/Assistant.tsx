import { nanoid } from 'nanoid';
import { memo } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import { AppState } from 'redux/store.model';

import * as S from './Assistant.styles';
import { Header } from './components/Header/Header';
import { Message } from './components/Message/Message';
import { TypeMessageArea } from './components/TypeMessageArea/TypeMessageArea';
import { MessageData } from './redux/model';
import { sendMessage } from './redux/redux/actions';

type StateProps = {
  messages: MessageData[];
  userName: string;
};

const mapState = (state: AppState): StateProps => ({
  messages: state.assistant.messages,
  userName: state.auth.displayName,
});

const mapDispatch = {
  pushMessage: sendMessage,
};

type Props = StateProps & typeof mapDispatch;

const submitForm = (values) => {
  console.log('данные из ассистента:', values);
};

const Assistant: React.FC<Props> = memo(
  ({ messages, userName, pushMessage }: Props): JSX.Element => {
    const submitMessage = (text: string) => pushMessage({ author: userName || 'Аноним', text, type: 'from' });

    return (
      <Form
        onSubmit={submitForm}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <S.Assistant>
              <Header name="Бот Евгений" photoURL="" />
              <S.MessagesArea>
                {messages.map((message) => (
                  <Message
                    key={nanoid()}
                    text={message.text}
                    name={message.author}
                    type={message.type}
                    data={message.data}
                  />
                ))}
              </S.MessagesArea>
              <TypeMessageArea submitMessage={submitMessage} />
            </S.Assistant>
          </form>
        )}
      />
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(Assistant);

export { ConnectedComponent as Assistant };
