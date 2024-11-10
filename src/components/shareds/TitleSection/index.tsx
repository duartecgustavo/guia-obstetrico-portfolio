import { ITextProps } from "@/interfaces/TextProps";
import { colors } from "@/styles/colors";
import styled from "styled-components";

const TitleSectionSC = styled.p<{
  fontSize: string;
  color: string;
  alignText: "left" | "right" | "center" | "justify";
  fontWeight: string;
}>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: 40px;
  color: ${({ color }) => color};
  text-align: ${({ alignText }) => alignText};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-bottom: 32px !important;

  @media (max-width: 1024px) {
    line-height: 34px;
    font-size: 28px;
    margin-bottom: 24px !important;
  }

  @media (max-width: 768px) {
    line-height: 28px;
    font-size: 24px;
    margin-bottom: 16px !important;
  }
`;

export default function TitleSection({
  children,
  fontSize = "32px",
  color = colors.grayScale77,
  alignText = "left",
  fontWeight = "normal",
  style,
}: ITextProps) {
  return (
    <TitleSectionSC
      fontSize={fontSize}
      color={color}
      alignText={alignText}
      fontWeight={fontWeight}
      style={style}
    >
      {children}
    </TitleSectionSC>
  );
}
