"use client";

import style from "./TrainingForm.module.scss";

const TrainingForm = () => {
  return (
    <section className={style.formTraining}>
      <h2>Adicionar ou editar treinamento</h2>
      <div className={style.formContainer}>
        <form>
          <h3>Treino A</h3>
          <div className={style.formGroup}>
            <textarea placeholder="Descrição do treino"></textarea>
            <input type="number" placeholder="Série" />
            <input type="number" placeholder="Repetições" />
            <button type="submit">Adicionar Treino</button>
          </div>
        </form>
        <form>
          <h3>Treino B</h3>
          <div className={style.formGroup}>
            <textarea placeholder="Descrição do treino"></textarea>
            <input type="number" placeholder="Série" />
            <input type="number" placeholder="Repetições" />
            <button type="submit">Adicionar Treino</button>
          </div>
        </form>
        <form>
          <h3>Treino C</h3>
          <div className={style.formGroup}>
            <textarea placeholder="Descrição do treino"></textarea>
            <input type="number" placeholder="Série" />
            <input type="number" placeholder="Repetições" />
            <button type="submit">Adicionar Treino</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TrainingForm;
