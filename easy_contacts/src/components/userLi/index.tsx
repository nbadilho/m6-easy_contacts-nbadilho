import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { UserItem, DivBtsItem, ItemPhone, CircleLetter } from "./style";

interface User {
  name: string;
  email: string;
  phone: string;
  id: number;
  createdAt: string;
}

interface iProp {
  remove(item: boolean): void;
  edit(item: boolean): void;
  open(item: boolean): void;
  item(item: User): void;
  user: User;
}

export function UserItemLi({ user, remove, edit, open, item }: iProp) {
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
    <UserItem>
      <div>
        <CircleLetter
          onClick={() => {
            open(true);
            item(user);
          }}
        >
          <p>{user.name[0].toUpperCase()}</p>
        </CircleLetter>
        <div>
          <p>{user.name} (você)</p>
          <ItemPhone>{filterPhone(user.phone)}</ItemPhone>
        </div>
      </div>
      <DivBtsItem>
        <button onClick={() => edit(true)}>
          {" "}
          <MdOutlineModeEditOutline size="26px" color="#75135dba" />
        </button>
        <button onClick={() => remove(true)}>
          {" "}
          <MdDelete size="26px" color="#75135dba" />
        </button>
      </DivBtsItem>
    </UserItem>
  );
}
