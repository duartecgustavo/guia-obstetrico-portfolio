import { ReactElement, ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface ITextProps {
  children: ReactElement | ReactNode;
  fontSize?: string;
  color?: string;
  alignText?: "left" | "right" | "center" | "justify";
  fontFamily?:
    | "Inter"
    | "Aref Ruqaa Ink"
    | "Bebas Neue"
    | "Merriweather"
    | "Playfair Display";
  fontWeight?: string;
  style?: CSSProperties;
}
