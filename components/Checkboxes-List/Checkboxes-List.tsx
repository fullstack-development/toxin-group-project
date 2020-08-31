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

class CheckboxesList extends React.Component<Props> {
  state = {};

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    this.setState({
      [value]: checked,
    });
  };

  render() {
    const { roomOptions } = this.props;
    return (
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
  }
}

export default CheckboxesList;
