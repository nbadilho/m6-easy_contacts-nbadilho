import { RenderModal } from "../modal";
import { HeaderCard, MainModal, DivCircleLetter, DivInfoItem } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

interface Item {
  name: string;
  email: string;
  phone: string;
  id: number;
  createdAt: string;
}

interface iProp {
  close(item: boolean): void;
  item: Item;
}

export function RenderViewItem({ close, item }: iProp) {
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
    <RenderModal>
      <HeaderCard>
        <button onClick={() => close(false)}>
          <AiOutlineCloseCircle size="28px" color="#75135dba" />
        </button>
      </HeaderCard>
      <MainModal>
        <DivCircleLetter>
          <p>{item.name[0].toUpperCase()}</p>
        </DivCircleLetter>
        <p>{item.name}</p>
        <DivInfoItem>
          <div>
            <BsFillTelephoneFill size="23px" color="green" />
            <p>{filterPhone(item.phone)}</p>
          </div>
          <div>
            <HiOutlineMail size="23px" color="orange" />
            <p>{item.email}</p>
          </div>
        </DivInfoItem>
      </MainModal>
    </RenderModal>
  );
}
