import UserTable from "@/components/layout/tables/userTable/UserTable";
import AddContentButton from "@/components/ui/buttons/addContentButton/AddContentButton";
import TableFilter from "@/components/ui/buttons/tableFilter/TableFilter";
import SearchInput from "@/components/ui/inputs/searchInput/SearchInput";
import style from "./Teachers.module.scss";

const TeachersPage = () => {
  return (
    <>
      <header className={style.header}>
        <section className={style.headerTitle}>
          <div>
            <h1>Painel de Professores</h1>
            <p>Gerenciar ou Adicionar Professores!</p>
          </div>
          <AddContentButton label="Adicionar Professor" />
        </section>
        <section className={style.headerFilters}>
          <SearchInput placeholder="Buscar Professores" />
          <TableFilter />
        </section>
      </header>
      <main className={style.main}>
        <UserTable />
      </main>
    </>
  );
};

export default TeachersPage;
