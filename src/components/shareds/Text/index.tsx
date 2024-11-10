import { ITextProps } from "@/interfaces/TextProps";
import { colors } from "@/styles/colors";
import styled from "styled-components";

const TextSC = styled.p<{
  fontSize: string;
  color: string;
  alignText: "left" | "right" | "center" | "justify";
  fontWeight: string;
  fontFamily: string;
}>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ fontSize }) => `calc(${fontSize} + 16px)`};
  color: ${({ color }) => color};
  text-align: ${({ alignText }) => alignText};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};

  cursor: cell;

  @media (max-width: 1024px) {
    line-height: ${({ fontSize }) => `calc(${fontSize} + 12px)`};
    font-size: 14px;
  }

  @media (max-width: 768px) {
    line-height: ${({ fontSize }) => `calc(${fontSize} + 8px)`};
  }
`;

export default function Text({
  children,
  fontSize = "16px",
  color = colors.grayFontBody,
  alignText = "left",
  fontWeight = "normal",
  fontFamily = "Inter",
  style,
}: ITextProps) {
  return (
    <TextSC
      fontSize={fontSize}
      color={color}
      alignText={alignText}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      style={style}
    >
      {children}
    </TextSC>
  );
}
