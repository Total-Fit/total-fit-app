"use client";

import { useState } from "react";
import AddContentButton from "@/components/ui/buttons/addContentButton/AddContentButton";
import TableFilter from "@/components/ui/buttons/tableFilter/TableFilter";
import SearchInput from "@/components/ui/inputs/searchInput/SearchInput";
import style from "./DashboardUserHeader.module.scss";
import RegisterForm from "../forms/registerForm/RegisterForm";

type DashboardUserHeaderProps = {
  title: string;
  description: string;
  addButtonLabel: string;
  searchInputLabel: string;
  typeOfRegister: "Aluno" | "Professor";
};

const DashboardUserHeader = (props: DashboardUserHeaderProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className={style.header}>
      <section className={style.headerTitle}>
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <AddContentButton
          label={props.addButtonLabel}
          onClick={() => setIsFormOpen(true)}
        />
      </section>
      <section className={style.headerFilters}>
        <SearchInput placeholder={props.searchInputLabel} />
        <TableFilter />
      </section>
      {isFormOpen && (
        <RegisterForm
          formTitle={props.typeOfRegister}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </header>
  );
};

export default DashboardUserHeader;
