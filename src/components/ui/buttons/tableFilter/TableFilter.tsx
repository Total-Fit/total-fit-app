"use client";

import Image from "next/image";
import style from "./TableFilter.module.scss";

const TableFilter = () => {
  const filters = [
    {
      id: 0,
      label: "Nome",
    },
    {
      id: 1,
      label: "Restrições",
    },
    {
      id: 2,
      label: "Pagamentos",
    },
    {
      id: 3,
      label: "Inscrições",
    },
  ];

  return (
    <div className={style.tableFilter}>
      {filters.map((filter) => (
        <button key={filter.id} className={filter.id === 3 ? style.active : ""}>
          <span>{filter.label}</span>
          <Image src="/icons/top_arrow_icon.svg" alt="Icon" width={24} height={24} />
        </button>
      ))}
    </div>
  );
};

export default TableFilter;
