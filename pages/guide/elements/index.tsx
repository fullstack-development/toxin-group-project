import React from 'react';
import Input from 'components/Input/Input';
import fieldValidator from 'shared/helpers/validators/validators';
import Dropdown from '@components/Dropdown/Dropdown';
import {
  Container, InputWrapper, ErrorMessage, DropdownWrapper,
} from './elements.styles';

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
          <DropdownWrapper>
            <Dropdown
              placeholder="Сколько гостей"
              enableControls={false}
              items={[
                {
                  title: 'Спальни',
                  wordForms: ['спальня', 'спальни', 'спален'],
                },
                {
                  title: 'Кровати',
                  wordForms: ['кровать', 'кровати', 'кроватей'],
                },
                {
                  title: 'Ванные комнаты',
                  wordForms: ['ванная', 'ванные', 'ванных'],
                },
              ]}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Dropdown
              placeholder="Сколько гостей"
              enableControls={false}
              groups={[
                {
                  name: 'guests',
                  wordForms: ['гость', 'гостя', 'гостей'],
                },
              ]}
              items={[
                {
                  title: 'взрослые',
                  groupName: 'guests',
                },
                {
                  title: 'дети',
                  groupName: 'guests',
                },
                {
                  title: 'младенцы',
                  wordForms: ['младенец', 'младенца', 'младенцев'],
                },
              ]}
            />
          </DropdownWrapper>
        </form>
      </Container>
    );
  }
}

export default Elements;
