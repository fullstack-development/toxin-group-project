import React from 'react';
import { Field } from 'react-final-form';

import Checkbox from 'components/Checkbox/Checkbox';

import { List, ListItem } from './Checkboxes-List.styles';

type Option = {
  name: string;
  value: string;
  label: string;
}

type Props = {
  roomOptions: Array<Option>;
};

const CheckboxesList: React.FC<Props> = ({ roomOptions }: Props) => (
  <List>
    {roomOptions.map((option) => (
      <ListItem key={option.value}>
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
      </ListItem>
    ))}
  </List>
);

export default CheckboxesList;
