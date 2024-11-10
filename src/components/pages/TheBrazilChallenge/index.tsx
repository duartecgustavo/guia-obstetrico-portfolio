import journals_1 from "@/assets/background-jornais-1.png";
import { Content } from "@/components/sections";
import {
  Box,
  ChallengeJournalBackground,
  Container,
  Source,
  Text,
  TextMark,
  Title,
  Video,
} from "@/components/shareds";
import { colors } from "@/styles/colors";

export default function TheBrazilChallenge() {
  return (
    <Content>
      <Container>
        <Box>
          <Title
            fontSize="24px"
            fontWeight="bold"
            color={colors.grayFontBody}
            fontFamily="Playfair Display"
            style={{ zIndex: 2 }}
          >
            CNN Brasil
          </Title>
          <Text style={{ zIndex: 2 }} fontFamily="Merriweather">
            O Brasil teve, em 2021,{" "}
            <TextMark>média de 107 mortes a cada 100 mil</TextMark>
            nascimentos, de acordo com o Painel de Monitoramento da Mortalidade
            Materna. A morte é causada por qualquer fator relacionado ou
            agravado pela gravidez ou por medidas tomadas em relação a esse
            período.
          </Text>
          <Source
            link="https://www.cnnbrasil.com.br/saude/brasil-teve-107-mortes-de-maes-a-cada-100-mil-nascimentos-em-2021-diz-levantamento/#:~:text=O%20Brasil%20teve%2C%20em%202021,de%20Monitoramento%20da%20Mortalidade%20Materna."
            source="CNN Brasil"
          />
          <ChallengeJournalBackground
            width="65%"
            height="160%"
            backgroundColor="rgba(23, 116, 222, 0.3)"
            url={journals_1}
            zIndex={0}
            right={-24}
            top={-24}
            bottom={-24}
          />
        </Box>
      </Container>
      <div style={{ height: 24 }} />
      <Container>
        <Box>
          <Title
            fontSize="24px"
            fontWeight="bold"
            color={colors.grayFontBody}
            fontFamily="Playfair Display"
            style={{ zIndex: 2 }}
          >
            Ministério da Saúde
          </Title>
          <Text style={{ zIndex: 2 }} fontFamily="Merriweather">
            Dados preliminares referentes a 2022 apontam que, enquanto o número
            de mortes maternas está em 46,56 para mulheres brancas, no caso das
            <TextMark>
              mulheres pretas, é mais que o dobro: 100,38 óbitos para cada 100
              mil nascidos vivos
            </TextMark>
            . No caso das pardas, a incidência é de 50,36. Vale lembrar que o
            Brasil assumiu uma meta junto às Nações Unidas de redução para 30
            mortes até 2030.
          </Text>
          <Text style={{ zIndex: 2 }} fontFamily="Merriweather">
            Em relação à morbidade - que é a presença de um tipo de doença na
            população -, os índices também são maiores na população negra.
          </Text>
          <Text style={{ zIndex: 2 }} fontFamily="Merriweather">
            <Text style={{ fontWeight: "bold" }}>
              As causas mais comuns foram:
            </Text>

            <ul>
              <li>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>
                    Síndromes hipertensivas:
                  </Text>
                  Gestantes pretas (64,2%); pardas (62,1%); e brancas (54,7%).
                </Text>
              </li>
              <li>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>
                    Hipertensão arterial grave:
                  </Text>
                  Gestantes pretas (58,5%); pardas (54,8%); e brancas (50,1%).
                </Text>
              </li>
              <li>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>
                    Pré-eclâmpsia grave:
                  </Text>
                  Gestantes pretas (26,5%); pardas (25%); e brancas (16,9%).
                </Text>
              </li>
            </ul>
          </Text>

          <Text style={{ zIndex: 2 }} fontFamily="Merriweather">
            Foi também identificada maior natimortalidade em gestações de
            mulheres pardas (0,7%) e pretas (0,5%). O índice com relação às
            brancas é de 0,3%.
          </Text>
          <Source
            link="https://www.gov.br/saude/pt-br/assuntos/noticias/2023/novembro/morte-de-maes-negras-e-duas-vezes-maior-que-de-brancas-aponta-pesquisa"
            source="Ministério da Saúde do Brasil"
          />
          <ChallengeJournalBackground
            width="65%"
            height="80%"
            backgroundColor="rgba(73, 189, 207, 0.3)"
            url={journals_1}
            zIndex={0}
            left={-24}
            bottom={-24}
          />
        </Box>
      </Container>
      <div style={{ height: 48 }} />
      <Container style={{ background: colors.grayScale66, paddingBlock: 48 }}>
        <Video videoId="gMoVqUCcR6c" />
      </Container>
    </Content>
  );
}
