import styled from "styled-components";
import purple from "../../images/purple.jpg"

export const DivPhoto = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url(${purple});
    max-height: 20%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;


  @media (min-width: 740px) {
    width: 55%;

  }
`;
