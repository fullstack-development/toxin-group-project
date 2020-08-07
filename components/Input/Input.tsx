import styles from './Input.module.scss';

const Input: React.FC = ({
  name, placeholder, type, value, onChange, ...rest
}) => {
  
  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    onChange(inputName, inputValue);
  };
  
  return(
    <input
      {...rest}
      className={styles.input}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  )
};

export default Input;
