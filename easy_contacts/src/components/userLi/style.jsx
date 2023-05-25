import styled from "styled-components";

export const UserItem = styled.li`
  background-color: var(--color-secondary);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border: 2px solid transparent;

  & > div {
    width: 100%;
    display: flex;
    /* align-items: center;
    justify-content: space-between; */
    gap: 10px;
    color: var(--color-purple);
    font-weight: 600;
  }
  &:hover {
    border: 2px solid var(--color-primary-200);
    background-color: var(--color-variation-blue);
  }
  @media (min-width: 700px) {
    padding: 18px;
  }
`;

export const CircleLetter = styled.button`
  background-color: red;
  opacity: 0.8;
  padding: 8px 13px;
  border-radius: 100%;
  color: white;
  border: 0px solid;
  font-weight: 600;
  font-size: var(--font-size-16);
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
export const DivBtsItem = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > button {
    outline: none;
    padding: 2px 6px;
    border: 2px solid transparent;
    background-color: transparent;
  }
  & > button:hover {
    border: 2px solid var(--color-purple);
    transition: 0.2s;
  }
`;

export const ItemPhone = styled.p`
  font-size: var(--font-size-12);
  color: var(--color-purple);
`;
