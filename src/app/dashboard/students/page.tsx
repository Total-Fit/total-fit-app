import UserTable from "@/components/layout/tables/userTable/UserTable";
import DashboardUserHeader from "@/components/layout/dashboardUserHeader/DashboardUserHeader";
import style from "./Students.module.scss";

const StudentsPage = () => {
  return (
    <>
      <DashboardUserHeader
        title="Painel de Alunos"
        description="Gerenciar ou Adicionar Alunos!"
        addButtonLabel="Adicionar Aluno"
        searchInputLabel="Buscar Alunos"
      />
      <main className={style.main}>
        <UserTable />
      </main>
    </>
  );
};

export default StudentsPage;
