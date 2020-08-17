import React from 'react';
import Input from 'components/Input/Input';
import fieldValidator from 'shared/helpers/validators/validators';
import styles from './elements.module.scss';

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
    return (
      <div className={styles.elements}>
        <form>
          <div className={styles.elements__input}>
            <Input
              name="name"
              placeholder="Name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <div className={styles['elements__input-error']}>
              {this.state.formErrors.name}
            </div>
          </div>
          <div className={styles.elements__input}>
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <div className={styles['elements__input-error']}>
              {this.state.formErrors.email}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Elements;
