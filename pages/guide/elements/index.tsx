import React from 'react';
import { Form, Field } from 'react-final-form';

import Dropdown from 'components/Dropdown/Dropdown';
import Input from 'components/Input/Input';
import { emailValidator, dateValidator, dateFormatMask } from 'shared/helpers/validators/';

import * as S from './elements.styles';

class Elements extends React.Component {
  handleFormSubmit = () => {};

  render() {
    return (
      <S.Container>
        <Form
          onSubmit={this.handleFormSubmit}
          render={() => (
            <form>
              <S.InputWrapper>
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
              </S.InputWrapper>
              <S.InputWrapper>
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
              </S.InputWrapper>
              <S.InputWrapper>
                <Field
                  name="date"
                  type="text"
                  render={(props) => (
                    <Input
                      {...props.rest}
                      {...props.input}
                      placeholder="ДД.ММ.ГГГГ"
                      validators={[dateValidator]}
                      mask={dateFormatMask}
                      label="Masked text field"
                    />
                  )}
                />
              </S.InputWrapper>
              <S.DropdownWrapper>
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
              </S.DropdownWrapper>
              <S.DropdownWrapper>
                <Dropdown
                  placeholder="Сколько гостей"
                  enableControls
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
              </S.DropdownWrapper>
            </form>
          )}
        />
      </S.Container>
    );
  }
}

export default Elements;
