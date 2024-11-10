import { colors } from "@/styles/colors";
import styled from "styled-components";
import { Text } from "@/components/shareds";

const Box = styled.div`
  /* margin-top: -8px !important; */
  z-index: 2;
`;
const Link = styled.a<{
  fontFamily: string;
}>`
  font-size: 10px;
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${colors.grayScale77};
  font-weight: bold;
  line-height: 10px;
`;

export default function SourceSC({
  source,
  link,
  fontFamily = "Inter",
}: ISourceProps) {
  return (
    <Box>
      <Text
        style={{
          fontSize: 10,
          lineHeight: "10px",
        }}
        fontFamily={fontFamily}
      >
        Fonte: {source}
      </Text>
      <Link fontFamily={fontFamily} href={link} target="_blank">
        Clique para acessar
      </Link>
    </Box>
  );
}

interface ISourceProps {
  source: string;
  link: string;
  fontFamily?:
    | "Inter"
    | "Aref Ruqaa Ink"
    | "Bebas Neue"
    | "Merriweather"
    | "Playfair Display";
}
