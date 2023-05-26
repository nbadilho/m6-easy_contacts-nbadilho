import React from "react";
import { IoMdContacts, IoMdExit } from "react-icons/io";
import {
  DivHeader,
  MainContacts,
  DivMainContent,
  DivLogo,
  DivBtsMain,
  ListContacts,
  EmptyItem,
} from "./style";
import { IoMdAdd } from "react-icons/io";
import { UserItemLi } from "../../components/userLi";
import { ContactItemLi } from "../../components/contactLi";
import { useState, useEffect } from "react";
import { RenderDeleteUser } from "../../components/modalDeleteUser";
import { RenderDeleteContact } from "../../components/modalDeleteContact";
import { RenderViewItem } from "../../components/modalViewItem";
import { RenderCreateContact } from "../../components/modalCreateContact";
import { RenderPatchContact } from "../../components/modalPatchContact";
import { RenderPatchUser } from "../../components/modalPatchUser";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
  phone: string;
  id: number;
  createdAt: string;
}

export function ContactsHome() {
  const [modalDeleteUser, setModalDeleteUser] = useState(false);
  const [modalDeleteContact, setModalDeleteContact] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalCreateContact, setModalCreateContact] = useState(false);
  const [modalEditContact, setModalEditContact] = useState(false);
  const [modalEditUser, setModalEditUser] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [infoUser, setInfoUser] = useState<User>({} as User);
  const [itemView, setItemView] = useState<User>({} as User);
  const navigate = useNavigate();

  async function getContacts() {
    const userTokenString = localStorage.getItem("@token_user");
    const userToken = userTokenString ? JSON.parse(userTokenString) : null;
    const contactsUser = await api
      .get("/contacts", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }
  async function getUser() {
    const userTokenString = localStorage.getItem("@token_user");
    const userToken = userTokenString ? JSON.parse(userTokenString) : null;

    const infoUser = await api
      .get("/users", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setInfoUser(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  useEffect(() => {
    getContacts();
    getUser();
  }, []);

  useEffect(() => {
    getUser();
  }, [modalEditUser]);

  useEffect(() => {
    getContacts();
  }, [modalEditContact, modalCreateContact, modalDeleteContact]);

  function exit() {
    localStorage.removeItem("@token_user");
    navigate("/");
  }

  return (
    <MainContacts>
      {modalDeleteUser ? <RenderDeleteUser close={setModalDeleteUser} /> : null}
      {modalDeleteContact ? (
        <RenderDeleteContact close={setModalDeleteContact} item={itemView} />
      ) : null}
      {modal ? <RenderViewItem close={setModal} item={itemView} /> : null}
      {modalCreateContact ? (
        <RenderCreateContact setModalCreateContact={setModalCreateContact} />
      ) : null}
      {modalEditContact ? (
        <RenderPatchContact close={setModalEditContact} item={itemView} />
      ) : null}
      {modalEditUser ? <RenderPatchUser close={setModalEditUser} /> : null}

      <header>
        <DivHeader>
          <IoMdContacts size="55px" color="white" />
        </DivHeader>
      </header>
      <DivMainContent>
        <div>
          <DivLogo>
            <IoMdContacts size="40px" color="#7790f1" />
            <h2>Easy Contacts</h2>
          </DivLogo>
          <DivBtsMain>
            <button onClick={() => setModalCreateContact(true)}>
              <IoMdAdd size="30px" color="#7790f1" />
            </button>
            <button onClick={() => exit()}>
              <IoMdExit size="29px" color="#7790f1" />
            </button>
          </DivBtsMain>
        </div>
        <ListContacts>
          {Object.keys(infoUser).length === 0 ? null : (
            <UserItemLi
              user={infoUser}
              remove={setModalDeleteUser}
              edit={setModalEditUser}
              open={setModal}
              item={setItemView}
            />
          )}
          {contacts.length == 0 ? (
            <EmptyItem>
              <p>Você ainda não possui nenhum contato</p>
            </EmptyItem>
          ) : (
            contacts.map((obj) => (
              <ContactItemLi
                contact={obj}
                open={setModal}
                item={setItemView}
                remove={setModalDeleteContact}
                edit={setModalEditContact}
              />
            ))
          )}
        </ListContacts>
      </DivMainContent>
    </MainContacts>
  );
}
