import styled from "styled-components";
import purple from "../../images/purple.jpg";

export const MainLogin = styled.main`
  width: 100%;
  min-width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans", sans-serif;

  > div {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 600px) {
    > div {
      width: 85vw;
    }
  }
  @media (min-width: 740px) {
    align-items: center;
    > div {
      flex-direction: row;
    }
  }
`;

export const DivPhoto = styled.div`
  background-image: url(${purple});
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivForm = styled.div`
  background-color: var(--colo-white-opacity60);
  height: 80%;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 17px;
  gap: 20px;
  > div {
    background-color: red;
  }
  > form {
    background-color: green;
  }
`;

export const DivBts = styled.div`
  display: none;
  @media (min-width: 740px) {
    display: flex;
  }
`;
