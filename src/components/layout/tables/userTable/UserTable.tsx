"use client";

import { useState, Fragment } from "react";
import style from "./UserTable.module.scss";
import SelectedModal from "../../cards/selectedModal/SelectedModal";
import RegisterForm from "../../forms/registerForm/RegisterForm";

const UserTable = () => {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const data = {
    name: "Gabriel Silva Lima",
    cpf: "123.456.789-00",
    restriction: "Sim",
    dateOfPayment: "12/05/2025",
    dateOfIncription: "12/03/2025",
  };

  const rows = 40;
  const allSelected = selected.size === rows && rows > 0;

  const toggleRow = (index: number) => {
    setSelected((prev) => {
      const next = new Set(prev);

      if (next.has(index)) next.delete(index);
      else next.add(index);

      return next;
    });
  };

  const toggleAll = (checked: boolean) => {
    if (checked) {
      setSelected(new Set(Array.from({ length: rows }, (_, i) => i)));
    } else {
      setSelected(new Set());
    }
  };

  const body = Array.from({ length: rows }, (_, index) => {
    const isRowSelected = selected.has(index);

    return (
      <Fragment key={index}>
        <p className={style.body}>
          <label
            htmlFor={`checkbox-${index}`}
            className={isRowSelected ? style.checked : ""}
          ></label>
          <input
            type="checkbox"
            id={`checkbox-${index}`}
            value={index}
            checked={isRowSelected}
            onChange={() => toggleRow(index)}
          />
        </p>
        <p
          className={`${style.body} ${style.name} ${
            isRowSelected ? style.checked : ""
          }`}
          onClick={() => setOpenEdit(true)}
        >
          {data.name}
        </p>
        <p className={`${style.body} ${isRowSelected ? style.checked : ""}`}>
          {data.cpf}
        </p>
        <p className={`${style.body} ${isRowSelected ? style.checked : ""}`}>
          {data.restriction}
        </p>
        <p className={`${style.body} ${isRowSelected ? style.checked : ""}`}>
          {data.dateOfPayment}
        </p>
        <p className={`${style.body} ${isRowSelected ? style.checked : ""}`}>
          {data.dateOfIncription}
        </p>
      </Fragment>
    );
  });

  return (
    <>
      <div className={style.table}>
        <p className={style.head}>
          <label
            htmlFor="all-checkbox"
            className={allSelected ? style.checked : ""}
            title={allSelected ? "Desmarcar todos" : "Selecionar todos"}
          ></label>
          <input
            type="checkbox"
            id="all-checkbox"
            checked={allSelected}
            onChange={(e) => toggleAll(e.target.checked)}
          />
        </p>
        <p className={style.head}>Nome</p>
        <p className={style.head}>CPF</p>
        <p className={style.head}>Restrição</p>
        <p className={style.head}>Pagamento</p>
        <p className={style.head}>Inscrição</p>
        {body}
      </div>
      {selected.size > 0 && <SelectedModal selectedCount={selected.size} />}
      {openEdit && (
        <RegisterForm
          formTitle="Editar Usuário"
          onClose={() => setOpenEdit(false)}
        />
      )}
    </>
  );
};

export default UserTable;
