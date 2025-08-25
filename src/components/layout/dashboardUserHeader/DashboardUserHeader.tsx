import AddContentButton from "@/components/ui/buttons/addContentButton/AddContentButton";
import TableFilter from "@/components/ui/buttons/tableFilter/TableFilter";
import SearchInput from "@/components/ui/inputs/searchInput/SearchInput";
import style from "./DashboardUserHeader.module.scss";

type DashboardUserHeaderProps = {
  title: string;
  description: string;
  addButtonLabel: string;
  searchInputLabel: string;
};

const DashboardUserHeader = (props: DashboardUserHeaderProps) => {
  return (
    <header className={style.header}>
      <section className={style.headerTitle}>
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <AddContentButton label={props.addButtonLabel} />
      </section>
      <section className={style.headerFilters}>
        <SearchInput placeholder={props.searchInputLabel} />
        <TableFilter />
      </section>
    </header>
  );
};

export default DashboardUserHeader;
