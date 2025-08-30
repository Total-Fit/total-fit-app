import style from "./TrainingDetail.module.scss";

const TrainingDetail = () => {
  return (
    <div className={style.trainingDetail}>
      <div className={style.trainingItem}>
        <h2>Treino A</h2>
        <div>
          <p>Tricipes pule 3x10</p>
          <p>Agachamento 3x10</p>
          <p>Supino 3x10</p>
          <p>Remada 3x10</p>
        </div>
      </div>
      <div className={style.trainingItem}>
        <h2>Treino B</h2>
        <div>
          <p>Flexão de braço 3x10</p>
          <p>Abdominal 3x10</p>
          <p>Prancha 3x10</p>
          <p>Elevação de pernas 3x10</p>
        </div>
      </div>
      <div className={style.trainingItem}>
        <h2>Treino C</h2>
        <div>
          <p>Agachamento sumô 3x10</p>
          <p>Levantamento terra 3x10</p>
          <p>Desenvolvimento de ombro 3x10</p>
          <p>Remada unilateral 3x10</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetail;
