import { ITextProps } from "@/interfaces/TextProps";
import { colors } from "@/styles/colors";
import styled from "styled-components";

const TextSC = styled.p<{
  fontSize: string;
  color: string;
  alignText: "left" | "right" | "center" | "justify";
  fontWeight: string;
  fontFamily: string;
  textRotation?: number;
}>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ fontSize }) => `calc(${fontSize} + 16px)`};
  color: ${({ color }) => color};
  text-align: ${({ alignText }) => alignText};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  transform: ${({ textRotation }) => `rotate(${textRotation}deg)`};

  cursor: cell;

  @media (max-width: 1024px) {
    line-height: ${({ fontSize }) => `calc(${fontSize} + 12px)`};
    font-size: 14px;
  }

  @media (max-width: 768px) {
    line-height: ${({ fontSize }) => `calc(${fontSize} + 8px)`};
  }
`;

export default function 
Text({
  children,
  fontSize = "16px",
  color = colors.grayFontBody,
  alignText = "left",
  fontWeight = "normal",
  fontFamily = "Inter",
  style,
  textRotation = 0,
}: ITextProps) {
  return (
    <TextSC
      fontSize={fontSize}
      color={color}
      alignText={alignText}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      textRotation={textRotation}
      style={style}
    >
      {children}
    </TextSC>
  );
}
