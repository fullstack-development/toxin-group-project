import React from 'react';
import Input from '../../../components/Input/Input';
import styles from './Elements.module.scss';
import {
  mustBeRequired,
  mustBeEmail,
  mustBeDate,
  composeValidators,
} from '../../../public/validators/validators';

class Elements extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ date: '', email: '', touched: { date: false, email: false } });
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;

    this.setState({
      [target.name]: target.value,
    });
  }

  handleInputBlur(e) {
    const target = e.target;

    this.setState({
      touched: { ...this.state.touched, [target.name]: true },
    });
  }

  render() {
    return (
      <div className={styles.elements}>
        <form>
          <div className={styles.elements__input}>
            <Input
              name="date"
              placeholder="ДД.ММ.ГГГГ"
              type="text"
              withMask
              mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
              description={{ type: 'masked text field', state: 'default' }}
              value={this.state.date}
              onChange={this.handleInputChange}
              onBlur={this.handleInputBlur}
              validator={composeValidators(mustBeRequired, mustBeDate)}
              touched={this.state.touched.date}
            />
          </div>
          <div className={styles.elements__input}>
            <Input
              name="email"
              placeholder="Email"
              type="email"
              description={{ type: 'text field', state: 'default' }}
              value={this.state.email}
              onChange={this.handleInputChange}
              onBlur={this.handleInputBlur}
              validator={composeValidators(mustBeRequired, mustBeEmail)}
              touched={this.state.touched.email}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Elements;
