import React from 'react';
import { Form, Field } from 'react-final-form';

import Input from 'components/Input/Input';
import { emailValidator, dateValidator } from 'shared/helpers/validators/';

import { Container, InputWrapper } from './elements.styles';

class Elements extends React.Component {
  handleFormSubmit = () => {};

  render() {
    return (
      <Container>
        <Form
          onSubmit={this.handleFormSubmit}
          render={() => (
            <form>
              <InputWrapper>
                <Field
                  name="email"
                  type="text"
                  render={(props) => (
                    <Input
                      {...props.input}
                      {...props.meta}
                      placeholder="Email"
                      label="text field"
                      validators={[emailValidator]}
                    />
                  )}
                />
              </InputWrapper>
              <InputWrapper>
                <Field
                  name="name"
                  type="text"
                  render={(props) => (
                    <Input
                      {...props.rest}
                      {...props.input}
                      placeholder="This is pretty awesome"
                      label="text field"
                      isRequired
                    />
                  )}
                />
              </InputWrapper>
              <InputWrapper>
                <Field
                  name="date"
                  type="text"
                  render={(props) => (
                    <Input
                      {...props.rest}
                      {...props.input}
                      placeholder="ДД.ММ.ГГГГ"
                      validators={[dateValidator]}
                      mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                      label="Masked text field"
                    />
                  )}
                />
              </InputWrapper>
            </form>
          )}
        />
      </Container>
    );
  }
}

export default Elements;
