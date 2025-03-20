import styled from "styled-components";
import { colors } from "@/styles/colors";
import { FaArrowUp } from "react-icons/fa";

export const ButtonUpSc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${colors.lightBlue22};

  cursor: pointer;

  &:hover {
    background-color: ${colors.lightBlue}; // Substitua pela cor desejada
  }
`;

export default function ButtonUp() {
  function upToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <ButtonUpSc onClick={upToTop}>
      <FaArrowUp color={colors.grayScale77} size="20" />
    </ButtonUpSc>
  );
}
