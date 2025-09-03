import style from "./Training.module.scss";
import TrainingDetail from "@/components/layout/cards/trainingDetail/TrainingDetail";
import TrainingForm from "@/components/layout/forms/trainingForrm/TrainingForm";
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
        <TrainingForm />
      </main>
    </>
  );
};

export default TrainingPage;
