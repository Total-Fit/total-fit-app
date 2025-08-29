import Input from "@/components/ui/inputs/defaultsFields/Input";
import style from "./RegisterForm.module.scss";
import SubmitInput from "@/components/ui/inputs/submitInput/SubmitInput";
import Image from "next/image";

type RegisterFormProps = {
  formTitle: string;
  onClose: () => void;
};

const RegisterForm = ({ formTitle, onClose }: RegisterFormProps) => {
  const fields = [
    "Nome",
    "Contato",
    "Email",
    "CPF",
    "RG",
    "Endereço",
    "Peso",
    "Altura",
    "Objetivo",
    "Instagram",
    "Nome de Usuário",
    "Senha",
    "Data de Pagamento",
  ];

  return (
    <div className={style.container}>
      <form className={style.form}>
        <button type="button" className={style.closeButton} onClick={onClose}>
          <Image
            src="/icons/close_icon.svg"
            alt="Image description"
            width={38}
            height={38}
          />
        </button>
        <h1>{formTitle}</h1>
        <div className={style.fields}>
          {fields.map((field, i) => (
            <div key={i}>
              <Input isAuthForm label={field} id={field} autoFocus={i === 0} />
            </div>
          ))}
          <div className={style.submit}>
            <SubmitInput />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
