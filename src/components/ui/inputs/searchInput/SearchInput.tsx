"use client";

import Image from "next/image";
import style from "./SearchInput.module.scss";

type SearchInputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = (props: SearchInputProps) => {
  return (
    <div className={style.searchInput}>
      <Image src="/search_icon.svg" alt="Search" width={32} height={32} />
      <input type="search" {...props} />
    </div>
  );
};

export default SearchInput;
