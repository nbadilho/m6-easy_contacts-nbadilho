import { RenderModal } from "../modal";
import { BtnNo, BtnYes, DivBts, HeaderCard, MainModal } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

interface iProp {
  close(item: boolean): void;
}
export function RenderDeleteUser({ close }: iProp) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function removeUser() {
    const userTokenString = localStorage.getItem("@token_user");
    const userToken = userTokenString ? JSON.parse(userTokenString) : null;
    await api
      .delete("/users", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        localStorage.removeItem("@token_user");
        navigate("/");
      })
      .catch((response) => {
        setLoading(false);
        console.log(response);
      });
  }
  function deleteUser() {
    setLoading(true);
    removeUser();
  }

  return (
    <RenderModal>
      <HeaderCard>
        <button onClick={() => close(false)}>
          <AiOutlineCloseCircle size="28px" color="#75135dba" />
        </button>
      </HeaderCard>
      <MainModal>
        <h1>Tem certeza que deseja apagar sua conta?</h1>
        <p>
          Você perderá <span>todos os seus contatos permanentemente</span> e
          terá que se registrar novamente
        </p>
        <DivBts>
          <BtnNo onClick={() => close(false)}>Não</BtnNo>
          <BtnYes onClick={() => deleteUser()} disabled={loading}>
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
