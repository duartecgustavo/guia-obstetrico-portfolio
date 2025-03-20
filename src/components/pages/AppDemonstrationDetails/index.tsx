import iphone_pra_cada_lado from "@/assets/iphone_dois_pra_cada_lado.png";
import iphone_lado_direito from "@/assets/iphone_lado_direito.png";
import { Content } from "@/components/sections";
import { Box, IphoneImage, Text, TextMark, Title } from "@/components/shareds";
import { colors } from "@/styles/colors";

export default function AppDemonstrationDetails() {
  return (
    <Content style={{ marginBlock: 96 }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            background: "#F9F6F6",
            display: "flex",
            alignSelf: "flex-end",
            flexDirection: "row",
            width: "90%",
            zIndex: 1,
            top: -96,
          }}
        >
          <div
            style={{
              width: "80%",
              paddingLeft: 24,
            }}
          >
            <Title
              fontWeight="bold"
              fontFamily="Bebas Neue"
              color={colors.grayFontBody}
              style={{ marginBottom: "1000px" }}
            >
              Guia Obstétrico
            </Title>
            <ul>
              <li style={{ color: colors.grayFontBody }}>
                <Text fontFamily="Inter" color={colors.grayFontBody}>
                  Acompanhar a Gestação: Monitorar o desenvolvimento do bebê e
                  as etapas da gravidez.
                </Text>
              </li>
              <li style={{ color: colors.grayFontBody }}>
                <Text fontFamily="Inter" color={colors.grayFontBody}>
                  Vacinas e Recomendações: Receber orientações sobre vacinas
                  necessárias e cuidados essenciais.
                </Text>
              </li>
              <li style={{ color: colors.grayFontBody }}>
                <Text fontFamily="Inter" color={colors.grayFontBody}>
                  Calculadoras e Alertas: Utilizar ferramentas que indicam
                  possíveis riscos e geram alertas para situações que exigem
                  atenção.
                </Text>
              </li>
              <li style={{ color: colors.grayFontBody }}>
                <Text fontFamily="Inter" color={colors.grayFontBody}>
                  Plano de Parto: Criar um plano personalizado para o parto.
                </Text>
              </li>
              <li style={{ color: colors.grayFontBody }}>
                <Text fontFamily="Inter" color={colors.grayFontBody}>
                  Conteúdos Educativos: Acessar artigos e cursos sobre diversos
                  temas relacionados à gestação.
                </Text>
              </li>
            </ul>
          </div>
          <IphoneImage
            src={iphone_lado_direito}
            alt=""
            style={{
              width: "100%",
              position: "absolute",
              right: -24,
              top: -96,
            }}
            styleBoxImage={{
              width: "20%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Box>
        <Box
          style={{
            background: "#F9F6F6",
            display: "flex",
            flexDirection: "row",
            width: "90%",
            zIndex: 1,
          }}
        >
          <IphoneImage
            src={iphone_pra_cada_lado}
            alt=""
            style={{ width: "110%", position: "absolute" }}
            styleBoxImage={{
              width: "30%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <div
            style={{
              width: "70%",
              paddingLeft: 24,
            }}
          >
            <Title
              fontWeight="bold"
              fontFamily="Bebas Neue"
              color={colors.grayFontBody}
              style={{ marginBottom: "1000px" }}
            >
              Perfil PROFISSIONAIS DE SAÚDE
            </Title>
            <ul>
              <li style={{ color: colors.grayFontBody }}>
                <Text fontFamily="Inter" color={colors.grayFontBody}>
                  Realizar Triagem Rápida: Ferramentas que auxiliam na triagem
                  de gestantes ao chegarem ao pronto-socorro, ajudando na tomada
                  de decisões rápidas e eficientes.
                </Text>
              </li>
              <li style={{ color: colors.grayFontBody }}>
                <Text fontFamily="Inter" color={colors.grayFontBody}>
                  Criar Fluxos e Procedimentos Padrões: Criação de fluxos e
                  protocolos que agilizam os procedimentos diários.
                </Text>
              </li>
              <li style={{ color: colors.grayFontBody }}>
                <Text fontFamily="Inter" color={colors.grayFontBody}>
                  Diagnosticar Riscos: Utilizar ferramentas que indicam
                  possíveis riscos e geram alertas para situações que exigem
                  atenção.
                </Text>
              </li>
              <li style={{ color: colors.grayFontBody }}>
                <Text fontFamily="Inter" color={colors.grayFontBody}>
                  Conteúdos Educativos: Acesso a artigos e cursos específicos
                  para aprimorar o conhecimento e a prática clínica.
                </Text>
              </li>
            </ul>
          </div>
        </Box>
        <Box
          style={{
            background: "#F9F6F6",
            display: "flex",
            alignSelf: "center",
            width: "70%",
            zIndex: 1,
            bottom: -96,
          }}
        >
          <Text fontFamily="Inter" color={colors.grayFontBody}>
            Com essas duas abordagens, o aplicativo se torna uma ferramenta
            valiosa na mão tanto das gestantes quanto dos profissionais de
            saúde, tornando a{" "}
            <TextMark>
              gestação mais segura, antecipando riscos, agilizando processos e
              tornando as pessoas mais informadas
            </TextMark>
            .
          </Text>
          <Text fontFamily="Inter" color={colors.grayFontBody}>
            Em um âmbito maior, os impactos de uma iniciativa como essa se
            refletem na{" "}
            <TextMark>redução dos índices de mortalidade gestacional</TextMark>,
            salvando incontáveis vidas.
          </Text>
        </Box>

        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            position: "absolute",
            zIndex: 0,
          }}
        >
          <div style={{ width: "65%", backgroundColor: "#49bdcf30" }} />
          <div style={{ width: "35%", backgroundColor: "#99cfdb30" }} />
        </div>
      </div>
    </Content>
  );
}
