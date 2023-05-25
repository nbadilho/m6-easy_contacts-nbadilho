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
      padding: 5px 15px;
    }
  }
`;

export const MainModal = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 0px 10px 17px 10px;
  gap: 10px;

  & > p {
    color: var(--color-purple);
    font-weight: 600;
    font-size: var(--font-size-20);
  }
  @media (min-width: 460px) {
    & {
      border: 2px solid var(--color-purple);
      margin: 8px 25px;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 700px) {
    & {
      padding: 7px 10px;
      margin: 8px 38px;
      margin-bottom: 27px;
    }
  }
`;

export const DivCircleLetter = styled.div`
  background-color: red;
  padding: 16px 22px;
  border-radius: 100%;
  color: white;
  font-weight: 600;
  font-size: var(--font-size-18);
  margin-top: 10px;
`;

export const DivInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
  & > div > p {
    color: var(--color-grey50);
    font-weight: 600;
    font-size: var(--font-size-14);
  }
`;
