import React from 'react';
import styles from './TextInput.module.scss';

interface TextInputProps {
  labelText: string;
  id: string;
  required?: boolean;
  type?: string;
  minlength?: number;
  value?: string;
}

const TextInput: React.FC<
  TextInputProps & React.HTMLAttributes<HTMLInputElement>
> = ({
  labelText,
  id,
  required,
  type = 'text',
  minlength,
  value,
  ...props
}: TextInputProps) => {
  return (
    <div className={styles.TextInput}>
      <div className={styles.Label}>
        <label htmlFor={id}>{labelText}</label>
      </div>
      <input
        className={styles.Input}
        type={type}
        id={id}
        name={id}
        required={required}
        minLength={minlength}
        value={value}
        {...props}
      ></input>
    </div>
  );
};

export default TextInput;
