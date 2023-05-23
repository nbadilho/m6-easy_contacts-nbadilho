import styled from "styled-components";

export const MainDiv = styled.main`
  width: 100%;
  min-width: 100%;
  min-height: 100vh;
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

