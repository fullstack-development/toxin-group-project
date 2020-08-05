import MaskedInput from "react-text-mask";
import { Field } from "react-final-form";
import styles from "./Input.module.scss";

interface IInputDescription {
  type: string;
  state: string;
}

interface IInputProps {
  name: string;
  placeholder: string;
  validate?;
  type: string;
  withMask?: boolean;
  mask?: Array<any>;
  description: IInputDescription;
}

const Input: React.FC<IInputProps> = ({name, placeholder, validate, type, withMask, mask, description}) => (
  <Field
    name={name}
    placeholder={placeholder}
    type={type}
    validate={validate}
    withMask={withMask}
    mask={mask}
    description={description}
  >
    {({ input, meta, ...rest }) => (
      <div className={styles.input}>
        <div>
          <div className={styles.input__description}>
            <p className={styles["input__description-type"]}>
              {rest.description.type}
            </p>
            <p className={styles["input__description-state"]}>
              {rest.description.state}
            </p>
          </div>
          {rest.withMask ? (
            <MaskedInput
              className={styles.input__field}
              {...input}
              placeholder={rest.placeholder}
              mask={rest.mask}
            />
          ) : (
            <input
              className={styles.input__field}
              {...input}
              placeholder={rest.placeholder}
            />
          )}
          {meta.error && meta.touched && (
            <div className={styles.input__error}>{meta.error}</div>
          )}
        </div>
      </div>
    )}
  </Field>
);

export default Input;
