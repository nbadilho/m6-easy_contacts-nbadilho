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
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UpdateContactInfo, contact } from "./schema";

interface Item {
  name: string;
  email: string;
  phone: string;
  id: number;
  createdAt: string;
}

interface iProp {
  close(item: boolean): void;
  item: Item;
}

export function RenderPatchContact({ close, item }: iProp) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateContactInfo>({
    mode: "onTouched",
    resolver: zodResolver(contact),
  });

  function notifySucess() {
    toast.success("Contato atualizado com sucesso!", { theme: "light" });
  }

  function filterData(obj: any) {
    const asArray = Object.entries(obj);
    const filtered = asArray.filter(([key, value]) => value !== "");
    return Object.fromEntries(filtered);
  }

  const submitPatch: SubmitHandler<UpdateContactInfo> = async (data) => {
    setLoading(true);
    const userTokenString = localStorage.getItem("@token_user");
    const userToken = userTokenString ? JSON.parse(userTokenString) : null;
    const newData = filterData(data);
    await api
      .patch(`/contacts/${item.id}`, newData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        setLoading(false);
        notifySucess();
        close(false);
      })
      .catch((response) => {
        setLoading(false);
        console.log(response);
      });
  };

  return (
    <RenderModal>
      <HeaderCard>
        <button onClick={() => close(false)}>
          <AiOutlineCloseCircle size="28px" color="#75135dba" />
        </button>
      </HeaderCard>
      <MainModal>
        <h1>Atualizar contato</h1>
        <FormCreate onSubmit={handleSubmit(submitPatch)}>
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
            <BtnNo onClick={() => close(false)}>Cancelar</BtnNo>
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
                "Atualizar"
              )}
            </BtnYes>
          </DivBts>
        </FormCreate>
      </MainModal>
    </RenderModal>
  );
}
