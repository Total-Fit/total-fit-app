import Image from "next/image";
import style from "./SelectedModal.module.scss";

type SelectedModalProps = {
  selectedCount: number;
};

const SelectedModal = ({ selectedCount }: SelectedModalProps) => {
  const handleDelete = () => {
    const confirmed = confirm(
      `Tem certeza que deseja deletar ${selectedCount} usuário(s)?`
    );

    console.log(confirmed);
  };

  return (
    <div className={style.selectedModal}>
      <p>{selectedCount} selecionado(s)</p>
      <button type="submit" onClick={handleDelete}>
        <span>Deletar</span>
        <Image src="/close_icon.svg" alt="Deletar" width={16} height={16} />
      </button>
    </div>
  );
};

export default SelectedModal;
