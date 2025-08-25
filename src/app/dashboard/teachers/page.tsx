import UserTable from "@/components/layout/tables/userTable/UserTable";
import DashboardUserHeader from "@/components/layout/dashboardUserHeader/DashboardUserHeader";
import style from "./Teachers.module.scss";

const TeachersPage = () => {
  return (
    <>
      <DashboardUserHeader
        title="Painel de Professores"
        description="Gerenciar ou Adicionar Professores!"
        addButtonLabel="Adicionar Professor"
        searchInputLabel="Buscar Professores"
        typeOfRegister="Professor"
      />
      <main className={style.main}>
        <UserTable />
      </main>
    </>
  );
};

export default TeachersPage;
