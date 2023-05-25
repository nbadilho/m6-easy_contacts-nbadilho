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
      padding: 10px 15px 4px 10px;
    }
  }
`;

export const MainModal = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 5px 10px;
  gap: 10px;
  margin-bottom: 5px;

  & > h1 {
    color: var(--color-purple);
    font-size: var(--font-size-24);
    margin-top: -7px;
  }

  @media (min-width: 700px) {
    & {
      padding: 7px 25px;
    }
  }
`;

export const FormCreate = styled.form`
  width: 100%;
  max-width: 300px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 7px;
  color: var(--color-primary-200);

  > label {
    margin-top: 8px;
    margin-bottom: 0px;
    padding-left: 10px;
    font-size: var(--font-size-14);
  }
  > input {
    border: 0px;
    height: 40px;
    width: 100%;
    border-radius: var(--radius-2);
    padding-left: 10px;
    background-color: var(--color-secondary-10);
    outline: none;
    color: var(--color-grey50);
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    color: var(--color-secondary-20);
    font-size: 15px;
  }
  > input:focus {
    transition: 0.3s;
    border: 1px solid var(--color-primary-200);
  }
  @media (min-width: 740px) {
    max-width: 340px;
    padding: 0px 10px;
    > label {
      margin-top: 10px;
      margin-bottom: -1px;
      padding-left: 10px;
    }
  }
`;

export const DivBts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 5px;
  @media (min-width: 700px) {
    gap: 25px;
  }
`;

export const BtnNo = styled.button`
  background-color: var(--color-primary-200);
  border: 2px solid transparent;
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
    width: 28%;
    font-size: var(--font-size-16);
  }
`;

export const BtnYes = styled.button`
  background-color: var(--color-primary-200);
  border: 2px solid transparent;
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
    width: 28%;
    font-size: var(--font-size-16);
  }
`;

export const ErrorText = styled.p`
  color: red;
  padding-left: 10px;
  font-size: 11px;
`;
