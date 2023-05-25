import styled from "styled-components";
import purple from "../../images/purple.jpg";

export const MainContacts = styled.main`
  width: 100%;
  min-width: 100%;
  min-height: 100vh;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  font-family: "Noto Sans", sans-serif;

  > header {
    width: 100%;
    max-height: 13vh;
    height: 13vh;
  }
`;

export const DivHeader = styled.div`
  background-image: url(${purple});
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
`;

export const DivMainContent = styled.div`
  background-color: var(--colo-white-opacity60);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;

  & > div {
    display: flex;
    width: 100%;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    height: 15vh;
    max-height: 15vh;
  }

  @media (min-width: 700px) {
    width: 70%;
    min-height: 500px;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  & > h2 {
    color: var(--color-primary-200);
    font-size: var(--font-size-14);
  }

  @media (min-width: 700px) {
    & > h2 {
      font-size: var(--font-size-18);
    }
  }
`;

export const DivBtsMain = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button {
    outline: none;
    padding: 2px 6px;
    border: 2px solid transparent;
    background-color: transparent;
  }
  & > button:hover {
    border: 2px solid var(--color-primary-200);
    transition: 0.2s;
  }
`;

export const ListContacts = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding-bottom: 16px;
  @media (min-width: 700px) {
    width: 85%;
  }
`;

export const EmptyItem = styled.li`
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 15%;
  color: var(--color-grey20);
  font-size: var(--font-size-18);
  @media (min-width: 700px) {
    margin-top: 10%;

    font-size: var(--font-size-20);
  }
`;
