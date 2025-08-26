"use client";

import Image from "next/image";
import style from "./LogoutButton.module.scss";

type LogoutButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const LogoutButton = (props: LogoutButtonProps) => {
  return (
    <button className={style.button} {...props}>
      <Image src="/icons/logout_icon.svg" alt="Sair" width={28} height={28} />
    </button>
  );
};

export default LogoutButton;
