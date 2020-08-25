import React from 'react';

import Input from 'components/Input/Input';
import { emailValidator, dateValidator } from 'shared/helpers/validators/';

import { Container, InputWrapper } from './elements.styles';

type ElementsState = {
  name: string;
  email: string;
  date: string;
}

class Elements extends React.Component {
  state: ElementsState = {
    name: '',
    email: '',
    date: '',
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, date } = this.state;
    return (
      <Container>
        <form>
          <InputWrapper>
            <Input
              name="email"
              placeholder="Email"
              type="text"
              value={email}
              validators={[emailValidator]}
              onChange={this.handleInputChange}
              label="text field"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="name"
              placeholder="This is pretty awesome"
              type="text"
              value={name}
              onChange={this.handleInputChange}
              label="text field"
              isRequired
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="date"
              placeholder="ДД.ММ.ГГГГ"
              type="text"
              value={date}
              validators={[dateValidator]}
              mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
              onChange={this.handleInputChange}
              label="Masked text field"
            />
          </InputWrapper>
        </form>
      </Container>
    );
  }
}

export default Elements;
