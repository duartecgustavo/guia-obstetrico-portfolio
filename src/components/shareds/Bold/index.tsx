import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const BoldSC = styled.div<{
  fontWeight: string;
}>`
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default function Bold({ children, fontWeight = "bold" }: ITextProps) {
  return <BoldSC fontWeight={fontWeight}>{children}</BoldSC>;
}

interface ITextProps {
  children: ReactElement | ReactNode;
  fontWeight?: string;
}
