import React from "react";
import { DivForm, LinkLogin, Separator, ErrorText } from "./style";
import { PhotoDiv } from "../../components/photoDiv";
import { DivMain } from "../../components/mainDiv";
import { Footer } from "../../components/footer";
import { RegisterInfo, registerSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../services/api";
import { ColorRing } from "react-loader-spinner";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContex";

export function Register() {
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const { autoLogin } = useContext(AuthContext);

  useEffect(() => {
    autoLogin();
  }, []);

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
  } = useForm<RegisterInfo>({
    mode: "onTouched",
    resolver: zodResolver(registerSchema),
  });

  function notifySucess() {
    toast.success("Conta criada com sucesso!", { theme: "light" });
  }

  function notifyError() {
    toast.error("Ops! Algo deu errado", { theme: "light" });
  }

  function changePages() {
    setTimeout(() => navigate("/"), 3000);
  }
  function verifyError(message: any) {
    console.log(message);
    if (message.message.includes("Email")) {
      setErrorEmail(true);
    }
    if (message.message.includes("Phone")) {
      setErrorPhone(true);
    }
  }

  const submitRegister: SubmitHandler<RegisterInfo> = async (data) => {
    setLoading(true);

    const registerUser = await api
      .post("/users", data)
      .then(() => {
        setLoading(false);
        reset();
        notifySucess();
        changePages();
      })
      .catch((response) => {
        setLoading(false);
        verifyError(response.response.data);
        notifyError();
      });
  };
  return (
    <DivMain>
      <div>
        <PhotoDiv />
        <DivForm>
          <div>
            <h2>Falta pouco!</h2>
            <p>
              Crie uma conta para acessar o melhor app de contatos do mercado
            </p>
          </div>
          <form onSubmit={handleSubmit(submitRegister)}>
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
            <button type="submit" disabled={loading}>
              {loading ? (
                <ColorRing
                  colors={[
                    "#75135dba",
                    "#75135dba",
                    "#75135dba",
                    "#75135dba",
                    "#75135dba",
                  ]}
                  height="25px"
                  width="25px"
                />
              ) : (
                "Cadastrar"
              )}
            </button>
          </form>
          <Separator />
          <p>
            Já possui uma conta? <LinkLogin to="/"> Faça login!</LinkLogin>
          </p>
          <Footer />
        </DivForm>
      </div>
    </DivMain>
  );
}
