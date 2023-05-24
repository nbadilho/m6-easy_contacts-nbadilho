import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivForm = styled.div`
  background-color: var(--colo-white-opacity60);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 17px;
  gap: 20px;
  min-height: max-content;
  > div {
    color: var(--color-primary-200);
    margin-top: 15px;
  }
  > div > h2 {
    font-size: var(--font-size-24);
  }
  > div > p {
    font-size: var(--font-size-14);
  }
  > form {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    color: var(--color-primary-200);
    margin-top: -3px;
  }
  > form > label {
    margin-top: 8px;
    margin-bottom: 4px;
    padding-left: 10px;
  }
  > form > input {
    border: 0px;
    height: 40px;
    border-radius: var(--radius-2);
    padding-left: 10px;
    background-color: white;
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
  > form > input:focus {
    transition: 0.3s;
    border: 1px solid var(--color-primary-200);
  }
  > form > button {
    margin-top: 30px;
    height: 40px;
    border: 2px solid transparent;
    border-radius: var(--radius-2);
    background-color: var(--color-primary-70);
    color: white;
    font-size: var(--font-size-14);
  }
  > form > button:hover {
    color: var(--color-primary-200);
    background-color: transparent;
    border: 2px solid var(--color-primary-70);
  }
  > p {
    color: var(--color-primary-200);
    text-align: center;
    font-size: 13px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
  }

  @media (min-width: 740px) {
    width: 45%;
    justify-content: space-around;

    > form {
      max-width: 360px;
    }
    > div {
      text-align: center;
      padding-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      flex-direction: column;
    }
    > form > label {
      margin-top: 10px;
      margin-bottom: 5px;
      padding-left: 10px;
    }
  }
`;

export const Separator = styled.hr`
  border-top: 1px solid var(--color-purple);
  width: 100%;
  max-width: 300px;
`;

export const LinkLogin = styled(Link)`
  color: var(--color-purple);
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;
export const ErrorText = styled.p`
  color: red;
  padding-left: 10px;
  font-size: 11px;
`;


