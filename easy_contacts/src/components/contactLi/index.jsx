import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ContactItem, DivCircleLetter, DivBtsItem, ItemPhone } from "./style";

export function ContactItemLi({ contact }) {
  function filterPhone(number) {
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
      <a>
        <div>
          <DivCircleLetter>
            <p>{contact.name[0].toUpperCase()}</p>
          </DivCircleLetter>
          <div>
            <p>{contact.name}</p>
            <ItemPhone>{filterPhone(contact.phone)}</ItemPhone>
          </div>
        </div>
        <DivBtsItem>
          <button>
            {" "}
            <MdOutlineModeEditOutline size="26px" color="#97a9f0 " />
          </button>
          <button>
            {" "}
            <MdDelete size="26px" color="#97a9f0 " />
          </button>
        </DivBtsItem>
      </a>
    </ContactItem>
  );
}
