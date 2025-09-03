"use client";

import Input from "@/components/ui/inputs/defaultsFields/Input";
import style from "./AuthForm.module.scss";
import SubmitInput from "@/components/ui/inputs/submitInput/SubmitInput";
import React from "react";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const route = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    route.push("/dashboard");
  };

  return (
    <div className={style.formContainer}>
      <div className={style.formHeader}>
        <h1>Área de Acesso</h1>
        <h3>Dashboard administrativo Total Fit Academia</h3>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input
          isAuthForm
          label="Usuário"
          type="text"
          id="username"
          placeholder="Usuário"
          autoFocus
          autoComplete="username"
          aria-label="Insira seu nome de usuário"
        />
        <Input
          isAuthForm
          label="Senha"
          type="password"
          id="password"
          placeholder="Senha"
          autoComplete="current-password"
          aria-label="Insira sua senha"
        />
        <SubmitInput value="Acessar" />
      </form>
    </div>
  );
};

export default AuthForm;
