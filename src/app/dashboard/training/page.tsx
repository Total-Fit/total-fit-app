import TrainingDetail from "@/components/layout/cards/trainingDetail/TrainingDetail";
import style from "./Training.module.scss";

const TrainingPage = () => {
  return (
    <>
      <header className={style.header}>
        <h1>Treinamentos</h1>
        <p>Adicione ou gerencie os treinamentos dos alunos!</p>
      </header>
      <main className={style.main}>
        <section className={style.studentList}>
          
        </section>
        <TrainingDetail />
        <section className={style.section}></section>
      </main>
    </>
  );
};

export default TrainingPage;
