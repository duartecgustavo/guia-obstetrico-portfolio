import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export const ContainerSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  padding-inline: 192px;

  @media (max-width: 1024px) {
    padding-inline: 96px;
    padding-block: 24px;
  }

  @media (max-width: 768px) {
    padding-inline: 48px;
    padding-block: 12px;
  }
`;

export default function Container({
  children,
  background,
  style,
}: IContainerProps) {
  return (
    <ContainerSC style={{ backgroundColor: background, ...style }}>
      {children}
    </ContainerSC>
  );
}

interface IContainerProps {
  children: ReactElement | ReactNode;
  background?: string;
  style?: React.CSSProperties;
}
