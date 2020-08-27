import React from 'react';

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
            <Checkbox
              name={option.name}
              label={option.label}
              value={option.value}
              // eslint-disable-next-line react/destructuring-assignment
              isChecked={this.state[option.value] || false}
              onChange={this.handleChange}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default CheckboxesList;
