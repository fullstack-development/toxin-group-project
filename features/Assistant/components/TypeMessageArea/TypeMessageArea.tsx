import { memo, useState } from 'react';

import * as S from './TypeMessageArea.styles';

type Props = {
  submitMessage: (message: string) => void;
};

const TypeMessageArea: React.FC<Props> = memo(
  ({ submitMessage }: Props): JSX.Element => {
    const [text, setText] = useState('');

    const onSubmitButtonClick = () => submitMessage(text);

    const onMessageAreaKeyPress = (event: React.KeyboardEvent): void => {
      const HTMLElement = event.target as HTMLTextAreaElement;

      if (event.key === 'Enter') {
        submitMessage(HTMLElement.value);
        setText('');
      }
    };

    const changeText = (event: React.ChangeEvent): void => {
      const HTMLElement = event.target as HTMLTextAreaElement;
      setText(HTMLElement.value);
    };

    return (
      <S.Container>
        <S.MessageArea
          placeholder="Введите сообщение"
          onChange={changeText}
          value={text}
          onKeyDown={onMessageAreaKeyPress}
        />
        <S.SubmitButton onClick={onSubmitButtonClick} />
      </S.Container>
    );
  },
);

export { TypeMessageArea };
