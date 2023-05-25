import React from "react";
import { IoMdContacts, IoMdExit } from "react-icons/io";
import {
  DivHeader,
  MainContacts,
  DivMainContent,
  DivLogo,
  DivBtsMain,
  ListContacts,
  UserItem,
  DivCircleLetter,
  DivBtsItem,
  ContactItem,
} from "./style";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export function ContactsHome() {
  return (
    <MainContacts>
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
            <button>
              <IoMdAdd size="30px" color="#7790f1" />
            </button>
            <button>
              <IoMdExit size="29px" color="#7790f1" />
            </button>
          </DivBtsMain>
        </div>
        <ListContacts>
          <UserItem>
            <a>
              <div>
                <DivCircleLetter>
                  <p>N</p>
                </DivCircleLetter>
                <p>Natalia</p>
              </div>
              <DivBtsItem>
                <button>
                  {" "}
                  <MdOutlineModeEditOutline size="26px" color="#75135dba" />
                </button>
                <button>
                  {" "}
                  <MdDelete size="26px" color="#75135dba" />
                </button>
              </DivBtsItem>
            </a>
          </UserItem>
          <ContactItem>
            <a>
              <div>
                <DivCircleLetter>
                  <p>C</p>
                </DivCircleLetter>
                <p>Contato</p>
              </div>
              <DivBtsItem>
                <button>
                  {" "}
                  <MdOutlineModeEditOutline size="26px" color="#75135dba" />
                </button>
                <button>
                  {" "}
                  <MdDelete size="26px" color="#75135dba" />
                </button>
              </DivBtsItem>
            </a>
          </ContactItem>
        </ListContacts>
      </DivMainContent>
    </MainContacts>
  );
}
