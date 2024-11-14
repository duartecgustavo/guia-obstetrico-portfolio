import { ITextMarkProps } from "@/interfaces/TextProps";
import styled, { css, keyframes } from "styled-components";

const fillGradient = keyframes`
  0% {
    background-size: 0% 100%; 

  }
  100% {
    background-size: 100% 100%; 

  }
`;

export const TextMarkSC = styled.span<ITextMarkProps>`
  display: ${(props) => props.display};
  align-items: center;
  padding: 0px 4px;
  margin: 0px !important;
  border-radius: 2px;
  cursor: cell;

  background-position: left;

  background: ${(props) =>
    props.isVisible
      ? `linear-gradient(to right, ${props.color}, ${props.color})`
      : "transparent"};

  background-repeat: no-repeat;

  animation: ${(props) =>
    props.isVisible
      ? css`
          ${fillGradient} 3s forwards
        `
      : "none"};

  @media (max-width: 768px) {
    fill: white;
    height: fit-content;
  }
`;
