import iphone_frente from "@/assets/iphone_frente.png";
import { Content } from "@/components/sections";
import {
  Box,
  Container,
  IphoneImage,
  Text,
  TextMark,
  Title,
} from "@/components/shareds";
import { colors } from "@/styles/colors";
import { isMobile } from "react-device-detect";

export default function AppDemonstration() {
  return (
    <Content>
      <Container
        style={
          isMobile
            ? { paddingInline: 0, display: "flex", alignItems: "center" }
            : {
                paddingInline: 0,
                display: "flex",
                alignItems: "end",
                marginBlock: "64px",
              }
        }
      >
        <Box
          style={
            isMobile
              ? {
                  background: "#49BDCF",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  zIndex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }
              : {
                  background: "#49BDCF",
                  display: "flex",
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  width: "80%",
                  zIndex: 1,
                }
          }
        >
          {isMobile && (
            <IphoneImage
              src={iphone_frente}
              alt=""
              style={{ width: "100%" }}
              styleBoxImage={{
                width: "50%",
                marginBlock: "36px",
              }}
            />
          )}
          {!isMobile && (
            <IphoneImage
              src={iphone_frente}
              alt=""
              style={{ position: "absolute", width: "200%", left: -110 }}
              styleBoxImage={{
                width: "10%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          )}

          <div
            style={{
              width: "90%",
              paddingLeft: 24,
            }}
          >
            <Title
              fontWeight="bold"
              fontFamily="Bebas Neue"
              color={colors.white}
              style={{ marginBottom: "1000px" }}
            >
              Guia Obstétrico
            </Title>
            <Text fontFamily="Inter" color={colors.white}>
              Baseado em todas as fontes acima, é{" "}
              <TextMark color="White">
                {" "}
                evidente o enorme impacto que a mortalidade materna exerce sobre
                a sociedade como um todo
              </TextMark>
              . Este é um tema multidisciplinar que afeta não apenas as
              mulheres, mas todas as pessoas ao seu redor.
            </Text>
            <Text fontFamily="Inter" color={colors.white}>
              Não à toa,{" "}
              <TextMark color="White">
                iniciativas globais como a da MSD
              </TextMark>
              , que atuam em várias frentes, são essenciais,{" "}
              <TextMark color="White">
                especialmente em regiões vulneráveis
              </TextMark>
              , tanto econômica quanto socialmente, onde o simples ato de nascer
              já representa um desafio.
            </Text>
            <Text fontFamily="Inter" color={colors.white}>
              Diante da diversidade de realidades e desigualdades, no Brasil não
              poderia ser diferente. E para enfrentar um desafio de abrangência
              nacional, a <b>MSD Brasil</b>, por meio de sua iniciativa "MSD
              para Mães", uniu forças com o{" "}
              <b>Hospital Israelita Albert Einstein</b> — um dos hospitais mais
              renomados do país em conjunto com a <b>ACT Digital</b>— uma das
              maiores consultorias de tecnologia do Brasil.
            </Text>
          </div>
        </Box>
      </Container>
    </Content>
  );
}
