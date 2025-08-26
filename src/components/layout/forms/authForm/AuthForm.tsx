"use client";

import { useState } from "react";
import Input from "@/components/ui/inputs/defaultsFields/Input";
import style from "./AuthForm.module.scss";
import SubmitInput from "@/components/ui/inputs/submitInput/SubmitInput";
import ApiIntegrate from "@/lib/services/apiIntegrate";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await ApiIntegrate.login({ username, password });

      if (data.status === 200) route.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.formContainer}>
      <div className={style.formHeader}>
        <h1>Área de Acesso</h1>
        <h3>Dashboard administrativo Total Fit Academia</h3>
      </div>
      <form className={style.form} onSubmit={submitHandler}>
        <Input
          isAuthForm
          label="Usuário"
          type="text"
          id="username"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Insira seu nome de usuário"
        />
        <Input
          isAuthForm
          label="Senha"
          type="password"
          id="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Insira sua senha"
        />
        <SubmitInput value="Acessar" />
      </form>
    </div>
  );
};

export default AuthForm;
