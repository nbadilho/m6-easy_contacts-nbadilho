import styled from "styled-components";

export const HeaderCard = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 6px 10px;
  & > button {
    outline: none;
    background-color: transparent;
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
  & > button:hover {
    transition: 0.2s;
    border: 2px solid var(--color-purple);
  }
  @media (min-width: 700px) {
    & {
      padding: 8px 15px;
    }
  }
`;

export const MainModal = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 8px 10px;
  gap: 10px;
  margin-bottom: 5px;
  & > h1 {
    color: var(--color-purple);
    font-size: var(--font-size-20);
  }
  & > p {
    font-size: var(--font-size-14);
    color: var(--color-grey100);
  }
  & > p > span {
    color: red;
    font-weight: 600;
  }
  @media (min-width: 700px) {
    & {
      padding: 7px 25px;
    }
    & > h1 {
      font-size: var(--font-size-24);
    }
    & > p {
      font-size: var(--font-size-16);
    }
  }
`;

export const DivBts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  @media (min-width: 700px) {
    gap: 25px;
  }
`;

export const BtnNo = styled.button`
  border: 0px;
  background-color: var(--color-primary-200);
  padding: 12px 12px;
  width: 35%;
  color: white;
  border-radius: 2px;
  font-size: var(--font-size-14);
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 700px) {
    width: 22%;
    font-size: var(--font-size-16);
  }
`;

export const BtnYes = styled.button`
  border: 0px;
  background-color: red;
  padding: 12px 12px;
  border-radius: 2px;
  width: 35%;
  color: white;
  font-size: var(--font-size-14);
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 700px) {
    width: 22%;
    font-size: var(--font-size-16);
  }
`;
