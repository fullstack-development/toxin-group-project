import styles from './Input.module.scss';

const Input: React.FC = ({
  name, placeholder, type, value, onChange, ...rest
}) => (
  <input
    className={styles.input}
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={(e) => onChange(e)}
    {...rest}
  />
);

export default Input;
