import React from 'react';
import Input from '@components/Input/Input';
import { fieldValidator } from '@public/helpers/validators/validators';
import styles from './elements.module.scss';

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

  handleInputChange(e) {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
      formErrors: { [name]: fieldValidator(name, value) },
    });
  }

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
            <div className={styles['elements__input-error']}>{this.state.formErrors.name}</div>
          </div>
          <div className={styles.elements__input}>
            <Input
              name="email"
              placeholder="Email"
              type="email"
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
