import React from "react";
import { DivForm, LinkRegister, Separator } from "./style";
import { PhotoDiv } from "../../components/photoDiv";
import { DivMain } from "../../components/mainDiv";
import { Footer } from "../../components/footer";

export function Login() {
  return (
    <DivMain>
      <div>
        <PhotoDiv />
        <DivForm>
          <div>
            <h2>Bem vindo!</h2>
            <p>Faça o login para acessar seus contatos</p>
          </div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email..." />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Senha..." />
            <button type="submit">Entrar</button>
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
