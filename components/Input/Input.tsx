import styles from './Input.module.scss';

const Input: React.FC = ({
  name, placeholder, type, value, onChange, ...rest
}) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    onChange(name, value);
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
