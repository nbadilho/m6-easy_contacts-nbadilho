import { RenderModal } from "../modal";
import {
  FormCreate,
  HeaderCard,
  MainModal,
  DivBts,
  BtnNo,
  BtnYes,
  ErrorText,
} from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateContactInfo, createSchema } from "./schema";

interface User {
  name: string;
  email: string;
  id: number;
  createdAt: string;
  phone: string;
}

interface iProp {
  setModalCreateContact: (item: boolean) => void;
}

export function RenderCreateContact({ setModalCreateContact }: iProp) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateContactInfo>({
    mode: "onTouched",
    resolver: zodResolver(createSchema),
  });

  function notifySucess() {
    toast.success("Contato criado com sucesso!", { theme: "light" });
  }

  const submitCreate: SubmitHandler<CreateContactInfo> = async (data) => {
    setLoading(true);
    const userTokenString = localStorage.getItem("@token_user");
    const userToken = userTokenString ? JSON.parse(userTokenString) : null;

    const newContact = await api
      .post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        setModalCreateContact(false);
        notifySucess();
      })
      .catch((response) => {
        setLoading(false);
        console.log(response);
      });
  };
  return (
    <RenderModal>
      <HeaderCard>
        <button onClick={() => setModalCreateContact(false)}>
          <AiOutlineCloseCircle size="28px" color="#75135dba" />
        </button>
      </HeaderCard>
      <MainModal>
        <h1>Novo contato</h1>
        <FormCreate onSubmit={handleSubmit(submitCreate)}>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            placeholder="Nome..."
            {...register("name")}
          />
          {errors.name?.message ? (
            <ErrorText>{errors.name.message}</ErrorText>
          ) : null}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            {...register("email")}
          />

          {errors.email?.message ? (
            <ErrorText>{errors.email.message}</ErrorText>
          ) : null}
          <label htmlFor="phone">Telefone</label>
          <input
            type="number"
            placeholder="Telefone..."
            {...register("phone")}
          />
          {errors.phone?.message ? (
            <ErrorText>{errors.phone.message}</ErrorText>
          ) : null}
          <DivBts>
            <BtnNo onClick={() => setModalCreateContact(false)}>Cancelar</BtnNo>
            <BtnYes type="submit" disabled={loading}>
              {" "}
              {loading ? (
                <ColorRing
                  colors={[
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                  ]}
                  height="15px"
                  width="15px"
                />
              ) : (
                "Criar"
              )}
            </BtnYes>
          </DivBts>
        </FormCreate>
      </MainModal>
    </RenderModal>
  );
}
