"use client";

import Image from "next/image";
import style from "./AddContentButton.module.scss";

type AddContentButtonProps = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AddContentButton = ({ label, ...props }: AddContentButtonProps) => {
  return (
    <button className={style.button} {...props}>
      <span>{label}</span>
      <Image
        src="/icons/add_icon.svg"
        alt="Adicionar Conteúdo"
        width={16}
        height={16}
      />
    </button>
  );
};

export default AddContentButton;
