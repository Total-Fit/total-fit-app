import UserTable from "@/components/layout/tables/userTable/UserTable";
import DashboardUserHeader from "@/components/layout/dashboardUserHeader/DashboardUserHeader";
import style from "./Teachers.module.scss";
import Pagination from "@/components/layout/cards/pagination/Pagination";

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
        <Pagination />
      </main>
    </>
  );
};

export default TeachersPage;
