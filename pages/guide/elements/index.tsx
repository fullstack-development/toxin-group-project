import React from 'react';
import Input from 'components/Input/Input';
import BulletList from 'components/BulletList/BulletList';
import fieldValidator from 'shared/helpers/validators/validators';
import {
  Container, InputWrapper, ErrorMessage, BulletListWrapper,
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
          {/* <InputWrapper>
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
          </InputWrapper> */}
          <BulletListWrapper>
            <BulletList items={['Нельзя с питомцами', 'Без вечеринок и мероприятий', 'Время прибытия — после 13:00, а выезд до 12:00']} />
          </BulletListWrapper>
        </form>
      </Container>
    );
  }
}

export default Elements;
