import styles from './Input.module.scss';

interface IInputProps {
  name: string,
  placeholder: string,
  type: string,
  value: string
  onChange: (e: React.MouseEvent) => void;
}

const Input: React.FC = ({
  name, placeholder, type, value, onChange, ...rest
}: IInputProps) => {
  const handleInputChange = (e: React.MouseEvent) => {
    const { name, value } = e.target;

    onChange(name, value);
  };

  return (
    <input
      {...rest}
      className={styles.input}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Input;
