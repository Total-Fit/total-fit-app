"use client";

import style from "./SubmitInput.module.scss";

type SubmitInputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const SubmitInput = (props: SubmitInputProps) => {
  return <input type="submit" className={style.submitInput} {...props} />;
};

export default SubmitInput;
