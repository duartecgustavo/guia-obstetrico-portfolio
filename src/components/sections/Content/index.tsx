import { colors } from "@/styles/colors";
import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export const ContentSC = styled.div`
  width: 100%;
  padding-block: 48px !important;
  position: relative;

  @media (max-width: 1024px) {
    padding-block: 36px !important;
  }

  @media (max-width: 768px) {
    padding-block: 24px !important;
  }
`;

export default function Content({
  children,
  background = colors.white,
  style
}: IContentProps) {
  return <ContentSC style={{ background: background, ...style }}>{children}</ContentSC>;
}

interface IContentProps {
  children: ReactNode | ReactElement;
  background?: string;
  style?: React.CSSProperties;
}
