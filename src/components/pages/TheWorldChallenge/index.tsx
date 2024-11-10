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

export default function TheWorldChallenge() {
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
            MSD para Mães
          </Title>
          <Text style={{ zIndex: 2 }} fontFamily="Merriweather">
            A{" "}
            <TextMark>
              cada dois minutos uma mãe morre em algum lugar do mundo
            </TextMark>{" "}
            em decorrência do parto. A{" "}
            <TextMark>
              maioria dessas mortes poderia ser evitada com tratamento e
              acompanhamento adequados
            </TextMark>
            .
          </Text>
          <Text style={{ zIndex: 2 }} fontFamily="Merriweather">
            Mais: quando isso ocorre, o recém-nascido que ficou sem a mãe tem
            menos chances de chegar até os dois anos de idade. Seus filhos têm
            mais chances de deixar a escola, de ter problemas de saúde e de
            morrer prematuramente.{" "}
            <TextMark>Quando uma mãe morre, toda a família é afetada</TextMark>{" "}
            de forma muito significante.
          </Text>
          <Source
            link="https://www.msd.com.br/sobre-a-msd/responsabilidade-corporativa/msd-para-maes/"
            source="MSD para Mães"
          />
          <ChallengeJournalBackground
            width="40%"
            height="80%"
            backgroundColor="rgba(23, 116, 222, 0.3)"
            url={journals_1}
            zIndex={0}
            left={-24}
            top={-24}
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
            Agência Brasil
          </Title>
          <Text style={{ zIndex: 2 }} fontFamily="Merriweather">
            Entre os países da América Latina e do Caribe,{" "}
            <TextMark>
              a mortalidade materna aumentou em 15% entre 2016 e 2020
            </TextMark>
            , com 8.400 mortes de mulheres a cada ano. Segundo a Organização
            Pan-Americana de Saúde (OPAS), "um retrocesso de 20 anos na saúde
            materna na região", após uma redução de 16,4% entre 1990 e 2015.
          </Text>
          <Text style={{ zIndex: 2 }} fontFamily="Merriweather">
            <TextMark>
              A meta é menos de 30 mortes maternas por 100 mil nascidos vivos
            </TextMark>
            . <TextMark>Hoje são 68 mortes por 100 mil nascidos vivos</TextMark>
            . A OMS define óbito materno como a morte de uma mulher, ocorrida
            durante a gestação, parto ou dentro de um período de 42 dias após o
            término da gestação, por qualquer causa relacionada com a gravidez,
            não incluídas causas acidentais ou incidentais.
          </Text>
          <Source
            link="https://agenciabrasil.ebc.com.br/saude/noticia/2023-05/mortes-maternas-registraram-maiores-altas-durante-pandemia-da-covid-19"
            source="Agência Brasil"
          />
          <ChallengeJournalBackground
            width="65%"
            height="80%"
            backgroundColor="rgba(73, 189, 207, 0.3)"
            url={journals_1}
            zIndex={0}
            right={-24}
            top={-96}
          />
        </Box>
      </Container>
      <div style={{ height: 48 }} />
      <Container style={{ background: colors.grayScale66, paddingBlock: 48 }}>
        <Video videoId="1fQGWfRoBFo" />
      </Container>
    </Content>
  );
}
