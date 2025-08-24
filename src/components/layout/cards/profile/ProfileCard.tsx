import style from "./ProfileCard.module.scss";

const ProfileCard = () => {
  const data = [
    {
      label: "Nome",
      value: "Gabriel Silva Lima",
    },
    {
      label: "Contato",
      value: "(11) 98765-4321",
    },
    {
      label: "Email",
      value: "gabriel@example.com",
    },
    {
      label: "Endereço",
      value: "Rua Exemplo, 123",
    },
    {
      label: "Data de Nascimento",
      value: "01/01/1990",
    },
    {
      label: "CPF",
      value: "123.456.789-00",
    },
    {
      label: "RG",
      value: "12.345.678-9",
    },
    {
      label: "Peso",
      value: "70 kg",
    },
    {
      label: "Altura",
      value: "1,75 m",
    },
    {
      label: "Instagram",
      value: "@gabriel_fit",
    },
  ];

  return (
    <div className={style.profileCard}>
      <h1>Dados de Usuário</h1>
      <div className={style.info}>
        {data.map((data) => (
          <div key={data.label} className={style.dataGroup}>
            <p>{data.label}</p>
            <p>{data.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
