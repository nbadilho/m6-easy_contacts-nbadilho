import styled from "styled-components";

export const CircleLetter = styled.button`
  background-color: red;
  opacity: 0.8;
  padding: 6px 10px;
  border-radius: 100%;
  color: white;
  border: 0px solid;
  font-weight: 600;
  font-size: var(--font-size-16);
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  @media (min-width: 740px) {
    padding: 8px 15px;
  }
`;
export const DivBtsItem = styled.div`
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
    border: 2px solid #97a9f0;
    transition: 0.2s;
  }
`;

export const ContactItem = styled.li`
  background-color: var(--color-tertiary);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border: 2px solid transparent;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #97a9f0;
    font-weight: 600;
  }
  &:hover {
    border: 2px solid var(--color-secondary);
    background-color: var(--color-secondary-10);
    cursor: pointer;
  }
  @media (min-width: 700px) {
    padding: 18px;
  }
`;

export const ItemPhone = styled.p`
  font-size: var(--font-size-12);
  color: #97a9f0;
`;
