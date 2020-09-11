import React from 'react';
import { Form, Field } from 'react-final-form';

import CheckboxesList from 'components/CheckboxesList/CheckboxesList';
import checkboxData from 'components/CheckboxesList/CheckboxesListData.json';
import expandableCheckboxData from 'components/Expander/ExpandableListData.json';
import Expander from 'components/Expander/Expander';
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
              <S.CheckboxWrapper>
                <CheckboxesList roomOptions={checkboxData} />
              </S.CheckboxWrapper>
              <S.ExpandableCheckboxWrapper>
                <Expander title="expandable checkbox list" isOpen={false}>
                  <CheckboxesList roomOptions={expandableCheckboxData} />
                </Expander>
              </S.ExpandableCheckboxWrapper>
              <S.ExpandableCheckboxWrapper>
                <Expander title="expandable checkbox list" isOpen>
                  <CheckboxesList roomOptions={expandableCheckboxData} />
                </Expander>
              </S.ExpandableCheckboxWrapper>
            </form>
          )}
        />
      </S.Container>
    );
  }
}

export default Elements;
