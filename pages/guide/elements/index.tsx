import React from 'react';

import fieldValidator from 'shared/helpers/validators/validators';
import Input from 'components/Input/Input';
import CheckboxesList from 'components/Checkboxes-List/Checkboxes-List';
import Expander from 'components/Expander/Expander';
import expandableCheckboxData from 'components/Expander/Expandable-List-data.json';
import checkboxData from 'components/Checkboxes-List/Checkboxes-List-data.json';

import * as S from './elements.styles';

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
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
      formErrors: { [name]: fieldValidator(name, value) },
    });
  };

  render() {
    const { name, formErrors, email } = this.state;
    return (
      <S.Container>
        <form>
          <S.InputWrapper>
            <Input
              name="name"
              placeholder="Name"
              type="text"
              value={name}
              onChange={this.handleInputChange}
            />
            <S.ErrorMessage>{formErrors.name}</S.ErrorMessage>
          </S.InputWrapper>
          <S.InputWrapper>
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <S.ErrorMessage>{formErrors.email}</S.ErrorMessage>
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
      </S.Container>
    );
  }
}

export default Elements;
