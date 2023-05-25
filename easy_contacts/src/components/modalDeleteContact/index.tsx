import { RenderModal } from "../modal";
import { BtnNo, BtnYes, DivBts, HeaderCard, MainModal } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface Item {
  name: string;
  email: string;
  phone: string;
  id: number;
  createdAt: string;
}

interface iProp {
  close(item: boolean): void;
  getContacts: () => void;
  item: Item;
}

export function RenderDeleteContact({ close, getContacts, item }: iProp) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function removeContact() {
    const userTokenString = localStorage.getItem("@token_user");
    const userToken = userTokenString ? JSON.parse(userTokenString) : null;
    await api
      .delete(`/contacts/${item.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        notifySucess();
        setLoading(false);
        getContacts();
        close(false);
      })
      .catch((response) => {
        setLoading(false);
        console.log(response);
      });
  }
  function deleteContact() {
    setLoading(true);
    removeContact();
  }

  function notifySucess() {
    toast.success("Contato removido com sucesso!", { theme: "light" });
  }

  return (
    <RenderModal>
      <HeaderCard>
        <button onClick={() => close(false)}>
          <AiOutlineCloseCircle size="28px" color="#75135dba" />
        </button>
      </HeaderCard>
      <MainModal>
        <h1>Tem certeza que deseja apagar esse contato?</h1>
        <p>
          Você perderá seus dados <span>permanentemente</span>.
        </p>
        <DivBts>
          <BtnNo onClick={() => close(false)}>Não</BtnNo>
          <BtnYes onClick={() => deleteContact()} disabled={loading}>
            {loading ? (
              <ColorRing
                colors={["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
                height="15px"
                width="15px"
              />
            ) : (
              "Sim"
            )}
          </BtnYes>
        </DivBts>
      </MainModal>
    </RenderModal>
  );
}
