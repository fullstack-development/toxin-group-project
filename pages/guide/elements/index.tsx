import React from 'react';
import Input from 'components/Input/Input';
import fieldValidator from 'shared/helpers/validators/validators';
import { TextButton } from '@components/TextButton/TextButton.styles';
import { Container, InputWrapper, ErrorMessage } from './elements.styles';

type ElementsState = {
  name: string;
  email: string;
  formErrors: { name: string, email: string };
}

class Elements extends React.Component {
  state: ElementsState = {
    name: '',
    email: '',
    formErrors: { name: '', email: '' },
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      formErrors: { [name]: fieldValidator(name, value) },
    });
  };

  render() {
    const { name, formErrors, email } = this.state;
    return (
      <Container>
        <form>
          <InputWrapper>
            <Input
              name="name"
              placeholder="Name"
              type="text"
              value={name}
              onChange={this.handleInputChange}
            />
            <ErrorMessage>{formErrors.name}</ErrorMessage>
          </InputWrapper>
          <InputWrapper>
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <ErrorMessage>{formErrors.email}</ErrorMessage>
          </InputWrapper>
        </form>
        <div>
          <TextButton>Click me</TextButton>
        </div>
        <TextButton as="a" href="https://www.google.com/">Click me</TextButton>
      </Container>
    );
  }
}

export default Elements;
