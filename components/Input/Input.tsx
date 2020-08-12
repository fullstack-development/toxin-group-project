import styles from './Input.module.scss';

type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
}

const Input: React.FC<InputProps> = ({
  name, placeholder, type, value, onChange, ...rest
}: InputProps) => (
  <input
    {...rest}
    className={styles.input}
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={(e) => onChange(e)}
  />
);

export default Input;
