import styled, { keyframes } from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 40px;
  background: rgba(18, 18, 20, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
`;
const animateModal = keyframes`
    0% {
       transform: translateY(-50%);
       opacity: 0;
     }

     100% {
       transform: translateY(0);
       opacity: 1;
     }

`;
export const Card = styled.div`
  margin-top: 50px;
  border-radius: 2px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation-name: animateModal;
  animation-iteration-count: 1;
  animation-duration: 1s;
  position: relative;
  width: 85%;
  max-width: 460px;
  animation-name: ${animateModal};
  animation-iteration-count: 1;
  animation-duration: 1s;
  background-color: white;
  @media (min-width: 700px) {
    margin-top: 60px;
  }
`;
