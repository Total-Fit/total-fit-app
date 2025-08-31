import style from "./Training.module.scss";
import TrainingDetail from "@/components/layout/cards/trainingDetail/TrainingDetail";
import TrainingTable from "@/components/layout/tables/trainingTable/TrainingTable";

const TrainingPage = () => {
  return (
    <>
      <header className={style.header}>
        <h1>Treinamentos</h1>
        <p>Adicione ou gerencie os treinamentos dos alunos!</p>
      </header>
      <main className={style.main}>
        <TrainingTable />
        <TrainingDetail />
        <section className={style.section}></section>
      </main>
    </>
  );
};

export default TrainingPage;
