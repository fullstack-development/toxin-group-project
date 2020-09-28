import React from 'react';
import { Field } from 'react-final-form';

import Checkbox from 'components/Checkbox/Checkbox';

import * as S from './CheckboxesList.styles';

type Option = {
  name: string;
  value: string;
  label: string;
  title?: string;
};

type Props = {
  roomOptions: Array<Option>;
};

const CheckboxesList: React.FC<Props> = ({ roomOptions }: Props) => (
  <S.List>
    {roomOptions.map((option) => {
      const { value, title, label, name } = option;
      return (
        <S.ListItem key={value} title={title}>
          <Field
            type="checkbox"
            name={name}
            value={value}
            render={(props) => (
              <Checkbox title={title} label={label} {...props.input} {...props.meta} />
            )}
          />
        </S.ListItem>
      );
    })}
  </S.List>
);

export default CheckboxesList;
