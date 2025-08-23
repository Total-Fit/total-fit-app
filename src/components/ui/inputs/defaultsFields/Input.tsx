"use client";

import style from "./Input.module.scss";

type InputTextProps = {
  isAuthForm?: boolean;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ isAuthForm, label, ...props }: InputTextProps) => {
  if (isAuthForm) {
    return (
      <div>
        <label className={style.label} htmlFor={props.id}>
          {label}
        </label>
        <input className={style.input} {...props} />
      </div>
    );
  }

  return <input className={style.input} {...props} />;
};

export default Input;
