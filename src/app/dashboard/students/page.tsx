import UserTable from "@/components/layout/tables/userTable/UserTable";
import DashboardUserHeader from "@/components/layout/dashboardUserHeader/DashboardUserHeader";
import style from "./Students.module.scss";
import Pagination from "@/components/layout/cards/pagination/Pagination";

const StudentsPage = () => {
  return (
    <>
      <DashboardUserHeader
        title="Painel de Alunos"
        description="Gerenciar ou Adicionar Alunos!"
        addButtonLabel="Adicionar Aluno"
        searchInputLabel="Buscar Alunos"
        typeOfRegister="Aluno"
      />
      <main className={style.main}>
        <UserTable />
        <Pagination />
      </main>
    </>
  );
};

export default StudentsPage;
