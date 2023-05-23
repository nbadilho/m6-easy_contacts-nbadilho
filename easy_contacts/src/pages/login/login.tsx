import React from "react";
import { DivForm, DivPhoto, Footer, MainLogin, Separator } from "./style";
import purple from "../../images/purple.jpg";
import { IoMdContacts } from "react-icons/io";
import InputMask from "react-input-mask";

export function Login() {
  return (
    <MainLogin>
      <div>
        <DivPhoto>
          <IoMdContacts size="55px" color="white" />
        </DivPhoto>
        <DivForm>
          <div>
            <h2>Bem vindo!</h2>
            <p>Faça o login para acessar seus contatos</p>
          </div>
          <form>
            {/* <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" name="name" placeholder="Nome..." /> */}
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email..." />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Senha..." />
            {/* <label htmlFor="phone">Telefone</label>
            <InputMask mask="(+99) 99 9999 9999" placeholder="Telefone..." /> */}
            <button type="submit">Entrar</button>
          </form>
          <Separator />
          <p>
            Ainda não possui uma conta? <a href="#"> Registre-se!</a>
          </p>
          <Footer>
            <p>Easy Contacts</p>
            <p>© 2023 </p>
          </Footer>
        </DivForm>
      </div>
    </MainLogin>
  );
}
