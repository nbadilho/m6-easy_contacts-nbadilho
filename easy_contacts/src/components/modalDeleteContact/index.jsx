import { RenderModal } from "../modal";
import { BtnNo, BtnYes, DivBts, HeaderCard, MainModal } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";

export function RenderDeleteContact() {
  return (
    <RenderModal>
      <HeaderCard>
        <button>
          <AiOutlineCloseCircle size="28px" color="#75135dba" />
        </button>
      </HeaderCard>
      <MainModal>
        <h1>Tem certeza que deseja apagar esse contato?</h1>
        <p>
          Você perderá seus dados <span>permanentemente</span>.
        </p>
        <DivBts>
          <BtnNo>Não</BtnNo>
          <BtnYes>Sim</BtnYes>
        </DivBts>
      </MainModal>
    </RenderModal>
  );
}
