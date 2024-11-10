import { Content } from "@/components/sections";
import { Box, Container, Text, Title } from "@/components/shareds";
import { colors } from "@/styles/colors";

export default function Intro() {
  return (
    <Content>
      <Container>
        <Title
          fontWeight="bold"
          fontFamily="Bebas Neue"
          color={colors.grayFontBody}
        >
          Um desafio mundial...
        </Title>
        <Box>
          <Text style={{ zIndex: 2 }} fontFamily="Aref Ruqaa Ink">
            A mortalidade materna é uma tragédia silenciosa que afeta milhões de
            famílias em todo o mundo. Esse projeto se trata de uma iniciativa
            global que busca salvar milhões de vidas, mas para entendermos o
            real valor da solução que quero apresentar, primeiro precisamos
            jogar luz ao tamanho do problema.
          </Text>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#f9f6f6",
              position: "absolute",
              zIndex: 1,
              left: 0,
              top: 0,
            }}
          />
          <div
            style={{
              width: "45%",
              height: "80%",
              backgroundColor: "rgba(23, 116, 222, 0.1)",
              position: "absolute",
              left: -24,
              top: -24,
              zIndex: 0,
            }}
          />
          <div
            style={{
              width: "45%",
              height: "60%",
              backgroundColor: "rgba(23, 116, 222, 0.1)",
              position: "absolute",
              right: -24,
              top: "20%",
              zIndex: 0,
            }}
          />
        </Box>
      </Container>
    </Content>
  );
}
