import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ContactItem, CircleLetter, DivBtsItem, ItemPhone } from "./style";

interface Contact {
  name: string;
  email: string;
  phone: string;
  id: number;
  createdAt: string;
}

interface iProp {
  contact: Contact;
  open(item: boolean): void;
  item(item: Contact): void;
  remove(item: boolean): void;
  edit(item: boolean): void;
}

export function ContactItemLi({ contact, open, item, remove, edit }: iProp) {
  function filterPhone(number: string) {
    const numberLength = number.length;
    let newPhone = "";
    if (numberLength === 8) {
      newPhone = number.slice(0, 4) + "-" + number.slice(4);
    } else if (numberLength === 9) {
      newPhone = number[0] + " " + number.slice(1, 5) + "-" + number.slice(5);
    } else if (numberLength === 10) {
      newPhone =
        number[0] +
        " " +
        number[1] +
        " " +
        number.slice(2, 6) +
        "-" +
        number.slice(6);
    } else if (numberLength === 11) {
      newPhone =
        "(" +
        number.slice(0, 2) +
        ") " +
        number[2] +
        " " +
        number.slice(3, 7) +
        "-" +
        number.slice(7);
    }

    return newPhone;
  }

  return (
    <ContactItem>
      <div>
        <CircleLetter
          onClick={() => {
            open(true);
            item(contact);
          }}
        >
          <p>{contact.name[0].toUpperCase()}</p>
        </CircleLetter>
        <div>
          <p>{contact.name}</p>
          <ItemPhone>{filterPhone(contact.phone)}</ItemPhone>
        </div>
      </div>
      <DivBtsItem>
        <button
          onClick={() => {
            item(contact);
            edit(true);
          }}
        >
          {" "}
          <MdOutlineModeEditOutline size="26px" color="#97a9f0 " />
        </button>
        <button
          onClick={() => {
            item(contact);
            remove(true);
          }}
        >
          {" "}
          <MdDelete size="26px" color="#97a9f0 " />
        </button>
      </DivBtsItem>
    </ContactItem>
  );
}
