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
  flex-direction: column;
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
    > div {
      flex-direction: row;
    }
  }
`;

export const DivPhoto = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url(${purple});
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 740px) {
    height: 100%;
    width: 55%;
  }
`;

export const DivForm = styled.div`
  background-color: var(--colo-white-opacity60);
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 17px;
  gap: 20px;
  > div {
    color: var(--color-primary-200);
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
    height: 35px;
    border-radius: var(--radius-2);
    padding-left: 10px;
    background-color: white;
    outline: none;
    color: var(--color-grey50);
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
    margin-top: 20px;
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
  > p > a {
    color: var(--color-purple);
  }
  > p > a:hover {
    font-weight: 600;
    cursor: pointer;
  }
  @media (min-width: 740px) {
    width: 45%;
    justify-content: space-around;
    > form {
      max-width: 360px;
    }
    > div {
      text-align: center;
      margin-bottom: -20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      flex-direction: column;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 8vh;
  color: var(--color-grey50);
  font-size: var(--font-size-12);
  /* @media (min-width: 740px) {
    margin-bottom: -20vh;
  } */
`;

export const Separator = styled.hr`
  border-top: 1px solid var(--color-purple);
  width: 100%;
  max-width: 300px;
`;
