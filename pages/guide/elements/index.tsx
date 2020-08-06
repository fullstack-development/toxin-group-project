import React from 'react';
import Input from '../../../components/Input/Input';
import styles from './Elements.module.scss';

class Elements extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ date: '', email: '' });
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { target } = e;

    this.setState({
      [target.name]: target.value,
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
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </div>
          <div className={styles.elements__input}>
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Elements;
