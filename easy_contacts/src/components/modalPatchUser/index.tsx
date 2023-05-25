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
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UpdateUserInfo, userSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-toastify";

interface iProp {
  close(item: boolean): void;
}

interface Data {
  name: string | "";
  email: string | "";
  password: string | "";
  phone: string | "";
}

export function RenderPatchUser({ close }: iProp) {
  const [loading, setLoading] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    setErrorEmail(false);
    setErrorPhone(false);
    setErrorMsg(false);
  }, [errorMsg]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateUserInfo>({
    mode: "onTouched",
    resolver: zodResolver(userSchema),
  });

  function notifySucess() {
    toast.success("Conta atualizada com sucesso!", { theme: "light" });
  }

  function verifyError(message: any) {
    console.log(message);
    if (message.message.includes("E-mail")) {
      setErrorEmail(true);
    }
    if (message.message.includes("Phone")) {
      setErrorPhone(true);
    }
  }

  function filterData(obj: any) {
    const asArray = Object.entries(obj);

    const filtered = asArray.filter(([key, value]) => value !== "");
    return Object.fromEntries(filtered);
  }

  const submitPatch: SubmitHandler<UpdateUserInfo> = async (data) => {
    setLoading(true);
    const userTokenString = localStorage.getItem("@token_user");
    const userToken = userTokenString ? JSON.parse(userTokenString) : null;
    const newData = filterData(data);
    console.log(newData);
    const patchUser = await api
      .patch("/users", newData, {
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
        verifyError(response.response.data);
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
        <h1>Atualizar conta</h1>
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
            onKeyUp={
              errorEmail == true
                ? () => setErrorMsg(true)
                : () => setErrorMsg(false)
            }
            {...register("email")}
          />
          {errorEmail == true ? (
            <ErrorText>Email já existente</ErrorText>
          ) : null}
          {errors.email?.message ? (
            <ErrorText>{errors.email.message}</ErrorText>
          ) : null}
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha..."
            {...register("password")}
          />
          {errors.password?.message ? (
            <ErrorText>{errors.password.message}</ErrorText>
          ) : null}
          <label htmlFor="phone">Telefone</label>
          <input
            type="number"
            placeholder="Telefone..."
            {...register("phone")}
            onKeyUp={
              errorPhone == true
                ? () => setErrorMsg(true)
                : () => setErrorMsg(false)
            }
          />
          {errorPhone == true ? (
            <ErrorText>Telefone já existente</ErrorText>
          ) : null}
          {errors.phone?.message ? (
            <ErrorText>{errors.phone.message}</ErrorText>
          ) : null}
          <DivBts>
            <BtnNo>Cancelar</BtnNo>
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
