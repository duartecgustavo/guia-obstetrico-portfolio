import { ITextProps } from "@/interfaces/TextProps";
import { colors } from "@/styles/colors";
import styled from "styled-components";

const TextMarkSC = styled.span<ITextMarkProps>`
  display: ${(props) => props.display};
  align-items: center;

  padding: 0px 4px 0px 4px;
  margin: 0px !important;
  border-radius: 2px;

  cursor: cell;

  background-color: ${(props) => props.color};

  @media (max-width: 768px) {
    fill: ${colors.white};
    height: fit-content;
  }
`;

export interface ITextMarkProps extends ITextProps {
  children: React.ReactNode;
  color?: "White" | "Yellow" | "Blue" | "Green" | string; 
  display?: "flex" | "block" | "initial";
}

const Text = ({
  children,
  color,
  fontFamily,
  display = "initial",
}: ITextMarkProps) => {
  let markColor: string = "#ffffff40";

  const colorMap: Record<string, string> = {
    White: "#ffffff40",
    Yellow: colors.yellow,
    Blue: "rgba(23, 116, 222, 0.2)",
    Green: "rgba(153, 207, 219, 0.66)",
  };

  if (color && colorMap[color]) {
    markColor = colorMap[color];
  } else if (color) {
    markColor = color;
  } else {
    markColor = colorMap["Green"];
  }

  return (
    <>
      <TextMarkSC color={markColor} fontFamily={fontFamily} display={display}>
        {children}
      </TextMarkSC>
    </>
  );
};

export default Text;
