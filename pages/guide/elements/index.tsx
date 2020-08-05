import React from 'react';
import { Form } from 'react-final-form';
import Input from '../../../components/Input/Input';
import styles from './Elements.module.scss';
import {
  mustBeRequired,
  mustBeEmail,
  mustBeDate,
  composeValidators,
} from '../../../public/validators/validators';

const onSubmit = () => {};

const Elements = () => (
  <div className={styles.elements}>
    <div>
      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit, form, submitting, pristine, values,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.elements__input}>
              <Input
                name="date"
                placeholder="ДД.ММ.ГГГГ"
                type="text"
                validate={composeValidators(mustBeRequired, mustBeDate)}
                withMask
                mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                description={{ type: 'masked text field', state: 'default' }}
              />
            </div>
            <div className={styles.elements__input}>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                validate={composeValidators(mustBeRequired, mustBeEmail)}
                description={{ type: 'text field', state: 'default' }}
              />
            </div>
          </form>
        )}
      />
    </div>
  </div>
);

export default Elements;
