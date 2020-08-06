import React from 'react';
import Input from '../../../components/Input/Input';
import styles from './Elements.module.scss';

class Elements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      formErrors: { email: '', name: '' },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;

    switch (fieldName) {
      case 'email':
        const emailValid = value && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Некорректный email';
        break;
      case 'name':
        const nameValid = value.match(/^[a-zA-ZА-Яа-я]+$/);
        fieldValidationErrors.name = nameValid ? '' : 'Имя может содеражть только буквенные символы';
        break;
      default:
        break;
    }

    this.setState({ formErrors: fieldValidationErrors }, this.validateForm);
  }

  handleInputChange(e) {
    const { target } = e;

    this.setState({
      [target.name]: target.value,
    }, () => { this.validateField(target.name, target.value) });
  }

  render() {
    return (
      <div className={styles.elements}>
        <form>
          <div className={styles.elements__input}>
            <Input
              name='name'
              placeholder='Name'
              type='text'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <div className={styles['elements__input-error']}>{this.state.formErrors.name}</div>
          </div>
          <div className={styles.elements__input}>
            <Input
              name='email'
              placeholder='Email'
              type='email'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <div className={styles['elements__input-error']}>{this.state.formErrors.email}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default Elements;
