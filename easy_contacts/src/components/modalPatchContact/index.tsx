import { RenderModal } from "../modal";
import {
  FormCreate,
  HeaderCard,
  MainModal,
  DivBts,
  BtnNo,
  BtnYes,
} from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";

export function RenderPatchContact() {
  return (
    <RenderModal>
      <HeaderCard>
        <button>
          <AiOutlineCloseCircle size="28px" color="#75135dba" />
        </button>
      </HeaderCard>
      <MainModal>
        <h1>Atualizar contato</h1>
        <FormCreate>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            placeholder="Nome..."
            // {...register("name")}
          />
          {/* {errors.name?.message ? (
            <ErrorText>{errors.name.message}</ErrorText>
          ) : null} */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            // onKeyUp={
            //   errorEmail == true
            //     ? () => setErrorMsg(true)
            //     : () => setErrorMsg(false)
            // }
            // {...register("email")}
          />
          {/* {errorEmail == true ? (
            <ErrorText>Email já existente</ErrorText>
          ) : null}
          {errors.email?.message ? (
            <ErrorText>{errors.email.message}</ErrorText>
          ) : null} */}
          <label htmlFor="phone">Telefone</label>
          <input
            type="number"
            placeholder="Telefone..."
            // {...register("phone")}
            // onKeyUp={
            //   errorPhone == true
            //     ? () => setErrorMsg(true)
            //     : () => setErrorMsg(false)
            // }
          />
          {/* {errorPhone == true ? (
            <ErrorText>Telefone já existente</ErrorText>
          ) : null}
          {errors.phone?.message ? (
            <ErrorText>{errors.phone.message}</ErrorText>
          ) : null} */}
        </FormCreate>
        <DivBts>
          <BtnNo>Cancelar</BtnNo>
          <BtnYes type="submit">Atualizar</BtnYes>
        </DivBts>
      </MainModal>
    </RenderModal>
  );
}
