import React from 'react';

import fieldValidator from 'shared/helpers/validators/validators';
import Input from 'components/Input/Input';
import CheckboxesList from 'components/Checkboxes-List/Checkboxes-List';
import Expander from 'components/Expander/Expander';
import expandableCheckboxData from 'components/Expander/Expandable-List-data.json';
import checkboxData from 'components/Checkboxes-List/Checkboxes-List-data.json';

import {
  Container, InputWrapper, ErrorMessage, CheckboxWrapper, ExpandableCheckboxWrapper,
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
          <CheckboxWrapper>
            <CheckboxesList roomOptions={checkboxData} />
          </CheckboxWrapper>
          <ExpandableCheckboxWrapper>
            <Expander title="expandable checkbox list" isOpen={false}>
              <CheckboxesList roomOptions={expandableCheckboxData} />
            </Expander>
          </ExpandableCheckboxWrapper>
          <ExpandableCheckboxWrapper>
            <Expander title="expandable checkbox list" isOpen>
              <CheckboxesList roomOptions={expandableCheckboxData} />
            </Expander>
          </ExpandableCheckboxWrapper>
        </form>
      </Container>
    );
  }
}

export default Elements;
