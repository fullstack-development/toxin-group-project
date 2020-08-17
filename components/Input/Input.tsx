import styled from 'styled-components';

type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
}

const Input: React.FC<InputProps> = ({
  name, placeholder, type, value, onChange, ...rest
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent) => {
    onChange(e);
  };

  return (
    <input
      {...rest}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};

export default styled(Input)`
  width: 100%;
  border-radius: 0.2857rem;
  border: 0.0714rem solid ${(props) => props.theme.typography.colorLight};
  padding: 0.9643rem;
  
  &::placeholder {
    font-family: ${(props) => props.theme.typography.fontName}, Arial, sans-serif;
    color: ${(props) => props.theme.typography.colorLight};
  }
  
  &:hover,
  &:focus {
    border: 0.0714rem solid ${(props) => props.theme.typography.color};
    outline: none;

    ::placeholder {
      color: ${(props) => props.theme.typography.colorDark};
    }
  }
`;
