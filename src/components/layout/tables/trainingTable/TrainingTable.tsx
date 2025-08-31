import style from "./TrainingTable.module.scss";

const TrainingTable = () => {
  return (
    <section className={style.trainingTable}>
      <input type="search" id="" placeholder="Buscar aluno" autoFocus />
      <div className={style.students}>
        <div>
          <p>
            <span>Nome:</span> Gabriel Lima
          </p>
          <p>
            <span>CPF:</span> 123.456.789-00
          </p>
          <p>
            <span>Restrição:</span> Não
          </p>
          <p>
            <span>Detalhes:</span> Sem restrições
          </p>
        </div>
        <div>
          <p>
            <span>Nome:</span> Gabriel Lima
          </p>
          <p>
            <span>CPF:</span> 123.456.789-00
          </p>
          <p>
            <span>Restrição:</span> Sim
          </p>
          <p>
            <span>Detalhes:</span> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Neque asperiores perspiciatis alias architecto
            dolorum a incidunt esse quae quaerat qui.
          </p>
        </div>
        <div>
          <p>
            <span>Nome:</span> Gabriel Lima
          </p>
          <p>
            <span>CPF:</span> 123.456.789-00
          </p>
          <p>
            <span>Restrição:</span> Não
          </p>
          <p>
            <span>Detalhes:</span> Sem restrições
          </p>
        </div>
        <div>
          <p>
            <span>Nome:</span> Gabriel Lima
          </p>
          <p>
            <span>CPF:</span> 123.456.789-00
          </p>
          <p>
            <span>Restrição:</span> Sim
          </p>
          <p>
            <span>Detalhes:</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nemo dolore consequatur et, non facere earum,
            explicabo rem eligendi eius quo quam! Veritatis ipsum laudantium
            sint, ipsam dolor eius suscipit ratione fuga cupiditate, molestiae
            amet expedita ullam corporis voluptatibus aut velit explicabo
            eveniet fugit assumenda culpa. Magnam ad exercitationem eveniet
            doloribus!
          </p>
        </div>
        <div>
          <p>
            <span>Nome:</span> Gabriel Lima
          </p>
          <p>
            <span>CPF:</span> 123.456.789-00
          </p>
          <p>
            <span>Restrição:</span> Sim
          </p>
          <p>
            <span>Detalhes:</span> Problema cardiovascular crônico
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingTable;
