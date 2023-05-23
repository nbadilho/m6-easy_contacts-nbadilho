import React from "react";
import { DivForm, LinkLogin, Separator } from "./style";
import InputMask from "react-input-mask";
import { PhotoDiv } from "../../components/photoDiv";
import { DivMain } from "../../components/mainDiv";
import { Footer } from "../../components/footer";

export function Register() {
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
          <form>
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" name="name" placeholder="Nome..." />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email..." />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Senha..." />
            <label htmlFor="password_check">Confirme sua senha</label>
            <input
              type="password"
              id="password_check"
              placeholder="Insira sua senha novamente..."
            />
            <label htmlFor="phone">Telefone</label>
            <InputMask mask="(+99) 99 9999 9999" placeholder="Telefone..." />
            <button type="submit">Cadastrar</button>
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
