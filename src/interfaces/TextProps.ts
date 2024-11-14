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

export interface ITextMarkProps extends ITextProps {
  children: React.ReactNode;
  color: "White" | "Yellow" | "Blue" | "Green" | string;
  display?: "flex" | "block" | "initial";
  isVisible?: boolean; // Nova prop para controlar se o componente está visível
}
