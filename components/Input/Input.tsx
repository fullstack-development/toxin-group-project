import MaskedInput from 'react-text-mask';
import styles from './Input.module.scss';

interface IInputDescription {
  type: string;
  state: string;
}

interface IInputProps {
  name: string;
  placeholder: string;
  type: string;
  withMask?: boolean;
  mask?: Array<any>;
  description: IInputDescription;
  value: string;
  touched: boolean;
  onChange;
  onBlur;
  validator;
}

const Input: React.FC<IInputProps> = ({name, placeholder, type, withMask, mask, description, value, onChange, onBlur, validator, touched}) => (
  <div className={styles.input}>
    <div>
      <div className={styles.input__description}>
        <p className={styles['input__description-type']}>
          {description.type}
        </p>
        <p className={styles['input__description-state']}>
          {description.state}
        </p>
      </div>
      {withMask ? (
        <MaskedInput
          className={styles.input__field}
          placeholder={placeholder}
          mask={mask}
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
        />
      ) : (
        <input
          className={styles.input__field}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
        />
      )}
      { touched ? <div className={styles.input__error}>{validator(value)}</div> : null }
    </div>
  </div>
);

export default Input;
