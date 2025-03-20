import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export const BoxSC = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  padding: 24px;

  @media (max-width: 1024px) {
    gap: 12px;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export default function Box({ children, style }: IBoxProps) {
  return <BoxSC style={{ ...style }}>{children}</BoxSC>;
}

interface IBoxProps {
  children: ReactElement | ReactNode;
  style?: React.CSSProperties;
}
