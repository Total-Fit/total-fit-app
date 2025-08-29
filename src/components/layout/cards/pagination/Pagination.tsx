import Image from "next/image";
import style from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div className={style.pagination}>
      <button className={style.prevButton}>
        <Image
          src="/icons/top_arrow_icon.svg"
          alt="Anterior"
          width={20}
          height={20}
        />
      </button>
      <button className={`${style.pageNumber} ${style.active}`}>1</button>
      <button className={style.pageNumber}>2</button>
      <button className={style.pageNumber}>3 </button>
      <button className={style.nextButton}>
        <Image
          src="/icons/top_arrow_icon.svg"
          alt="Próximo"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default Pagination;
