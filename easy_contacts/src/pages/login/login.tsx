import React from "react";
import {
  DivForm,
  LinkRegister,
  Separator,
  ErrorText,
  ErrorLoginText,
} from "./style";
import { PhotoDiv } from "../../components/photoDiv";
import { DivMain } from "../../components/mainDiv";
import { Footer } from "../../components/footer";
import { LoginInfo } from "./schema";
import { loginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../services/api";
import { ColorRing } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setErrorLogin(false);
    setErrorMsg(false);
  }, [errorMsg]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInfo>({
    mode: "onTouched",
    resolver: zodResolver(loginSchema),
  });

  const submitLogin: SubmitHandler<LoginInfo> = async (data) => {
    setLoading(true);
    const loginUser = await api
      .post("/login", data)
      .then((response) => {
        setLoading(false);
        moveUserPage();
        localStorage.setItem(
          "@token_user",
          JSON.stringify(response.data.token)
        );
        api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
      })
      .catch(() => {
        setLoading(false);
        setErrorLogin(true);
      });
  };

  function moveUserPage() {
    setTimeout(() => navigate(`/contacts`), 500);
  }

  return (
    <DivMain>
      <div>
        <PhotoDiv />
        <DivForm>
          <div>
            <h2>Bem vindo!</h2>
            <p>Faça o login para acessar seus contatos</p>
          </div>
          <form onSubmit={handleSubmit(submitLogin)}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email..."
              {...register("email")}
              onKeyUp={
                errorLogin == true
                  ? () => setErrorMsg(true)
                  : () => setErrorMsg(false)
              }
            />
            {errors.email?.message ? (
              <ErrorText>{errors.email.message}</ErrorText>
            ) : null}
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Senha..."
              {...register("password")}
              onKeyUp={
                errorLogin == true
                  ? () => setErrorMsg(true)
                  : () => setErrorMsg(false)
              }
            />
            {errors.password?.message ? (
              <ErrorText>{errors.password.message}</ErrorText>
            ) : null}
            {errorLogin == true ? (
              <ErrorLoginText>Email ou senha incorretos</ErrorLoginText>
            ) : null}
            <button type="submit">
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
                "Entrar"
              )}
            </button>
          </form>
          <Separator />
          <p>
            Ainda não possui uma conta?{" "}
            <LinkRegister to="/register"> Registre-se!</LinkRegister>
          </p>
          <Footer />
        </DivForm>
      </div>
    </DivMain>
  );
}
