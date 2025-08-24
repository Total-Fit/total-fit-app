import AddContentButton from "@/components/ui/buttons/addContentButton/AddContentButton";
import style from "./Students.module.scss";
import SearchInput from "@/components/ui/inputs/searchInput/SearchInput";
import TableFilter from "@/components/ui/buttons/tableFilter/TableFilter";

const StudentsPage = () => {
  return (
    <>
      <header className={style.header}>
        <section className={style.headerTitle}>
          <div>
            <h1>Painel de Alunos</h1>
            <p>Gerenciar ou Adicionar Alunos!</p>
          </div>
          <AddContentButton label="Adicionar Aluno" />
        </section>
        <section className={style.headerFilters}>
          <SearchInput placeholder="Buscar Alunos" />
          <TableFilter />
        </section>
      </header>
      <main className={style.main}></main>
    </>
  );
};

export default StudentsPage;
