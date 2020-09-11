import React from 'react';
import { Field } from 'react-final-form';

import Checkbox from 'components/Checkbox/Checkbox';

import * as S from './Checkboxes-List.styles';

type Option = {
  name: string;
  value: string;
  label: string;
}

type Props = {
  roomOptions: Array<Option>;
};

const CheckboxesList: React.FC<Props> = ({ roomOptions }: Props) => (
  <S.List>
    {roomOptions.map((option) => (
      <S.ListItem key={option.value}>
        <Field
          type="checkbox"
          name={option.name}
          value={option.value}
          render={(props) => (
            <Checkbox
              label={option.label}
              {...props.input}
              {...props.meta}
            />
          )}
        />
      </S.ListItem>
    ))}
  </S.List>
);

export default CheckboxesList;
