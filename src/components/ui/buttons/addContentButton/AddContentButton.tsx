"use client";

import Image from "next/image";
import style from "./AddContentButton.module.scss";

type AddContentButtonProps = {
  label: string;
  isTraining?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AddContentButton = ({
  label,
  isTraining,
  ...props
}: AddContentButtonProps) => {
  return (
    <button className={style.button} {...props}>
      <span>{label}</span>
      <Image
        src={isTraining ? "/add_training.svg" : "/add_icon.svg"}
        alt="Adicionar Conteúdo"
        width={16}
        height={16}
      />
    </button>
  );
};

export default AddContentButton;
