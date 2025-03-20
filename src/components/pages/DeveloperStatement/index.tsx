import background_checkered from "@/assets/background-checkered.png";
import { Content } from "@/components/sections";
import {
  Box,
  ChallengeJournalBackground,
  Container,
  Text,
  TextMark,
  Title,
} from "@/components/shareds";

import { colors } from "@/styles/colors";
import { useEffect, useState } from "react";

export default function AppDemonstrationDetails() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Content background={colors.white}>
      <Container>
        <Box>
          <Title
            fontSize="24px"
            fontWeight="bold"
            color={colors.grayFontBody}
            fontFamily="Bebas Neue"
            style={{ zIndex: 2 }}
            textRotation={
              windowSize <= 540
                ? 0.1
                : windowSize <= 768
                ? 0.3
                : windowSize <= 1024
                ? 0.7
                : 0.9
            }
          >
            Desafios no desenvolvimento
          </Title>
          <Text
            style={{ zIndex: 2 }}
            fontFamily="Aref Ruqaa Ink"
            textRotation={
              windowSize <= 540
                ? 0.1
                : windowSize <= 768
                ? 0.3
                : windowSize <= 1024
                ? 0.7
                : 0.9
            }
          >
            Antes de falar sobre os desafios que enfrentei nesse projeto, é
            importante adicionar um contexto sobre minha trajetória. Comecei
            minha jornada no mundo do TI em 2020. Em 2021, tive minha primeira
            experiência profissional, ainda muito iniciante.{" "}
            <TextMark>
              No início de 2022, como desenvolvedor da ACT Digital, comecei
              minha trajetória no Hospital Israelita Albert Einstein.
            </TextMark>{" "}
            Durante todo esse processo, enfrentei diversos desafios, mas o
            divisor de águas foi o Guia Obstétrico.
          </Text>
          <Text
            style={{ zIndex: 2 }}
            fontFamily="Aref Ruqaa Ink"
            textRotation={
              windowSize <= 540
                ? 0.1
                : windowSize <= 768
                ? 0.3
                : windowSize <= 1024
                ? 0.7
                : 0.9
            }
          >
            O projeto teve uma trajetória conturbada desde seu início em 2021,
            passando pelas mãos de várias pessoas que por diferentes motivos,
            não conseguiram dar continuidade ao desenvolvimento. Apesar de ser
            uma solução significativa para uma causa tão nobre,{" "}
            <TextMark>
              já vinha de um processo desacreditado, gerando dúvidas sobre sua
              viabilidade.
            </TextMark>
          </Text>
          <Text
            style={{ zIndex: 2 }}
            fontFamily="Aref Ruqaa Ink"
            textRotation={
              windowSize <= 540
                ? 0.1
                : windowSize <= 768
                ? 0.3
                : windowSize <= 1024
                ? 0.7
                : 0.9
            }
          >
            <TextMark>No início de 2024,</TextMark> após já estar familiarizado
            com os desafios técnicos e de negócio, decidi assumir o protagonismo
            desse projeto. Com a ajuda de diversos profissionais que toparam
            trabalhar em conjunto comigo,{" "}
            <TextMark>
              iniciamos uma nova fase focada não apenas em finalizar o projeto,
              mas principalmente em trazer o seu devido valor, para que ele
              pudesse cumprir seu objetivo de salvar vidas.
            </TextMark>
          </Text>
          <Text
            style={{ zIndex: 2 }}
            fontFamily="Aref Ruqaa Ink"
            textRotation={
              windowSize <= 540
                ? 0.1
                : windowSize <= 768
                ? 0.3
                : windowSize <= 1024
                ? 0.7
                : 0.9
            }
          >
            Com uma equipe transversal, carregando a responsabilidade de
            representar empresas já consolidadas e com enorme credibilidade,
            organizamos um plano de ação, estabelecemos pontes de diálogo,
            entendemos as principais demandas que faltavam ser realizadas, além
            de realizar ajustes em diversas áreas do projeto, como design,
            revisão de regras de negócio, correções de bugs, realização de
            testes.
          </Text>
          <Text
            style={{ zIndex: 2 }}
            fontFamily="Aref Ruqaa Ink"
            textRotation={
              windowSize <= 540
                ? 0.1
                : windowSize <= 768
                ? 0.3
                : windowSize <= 1024
                ? 0.7
                : 0.9
            }
          >
            Hoje tenho orgulho de saber que participei do começo ao fim de cada
            etapa desse processo,{" "}
            <TextMark>
              atuando em várias frentes e principalmente, evoluindo minhas
              habilidades não só técnicas voltadas a programação pura e simples,
              mas também habilidades de negócio.
            </TextMark>{" "}
            Atuando ora como analista, ora como desenvolvedor, ora como owner,
            ora como designer e sempre absorvendo conhecimentos de grandes
            profissionais que em cada uma dessas áreas fez um trabalho impar,
            sempre me dando o apoio, resolvendo problemas e com foco em trazer
            valor para essa entrega.
          </Text>
          <ChallengeJournalBackground
            width="40%"
            height="40%"
            backgroundColor="rgba(73, 189, 207, 0.3)"
            rotationPage={
              windowSize <= 540
                ? "rotate(0.1deg)"
                : windowSize <= 768
                ? "rotate(0.3deg)"
                : windowSize <= 1024
                ? "rotate(0.7deg)"
                : "rotate(0.9deg)"
            }
            pageShadow="1px 1px 2px rgba(0, 0, 0, 0.3)"
            url={background_checkered}
            zIndex={0}
            left={-24}
            top={-24}
          />
          <ChallengeJournalBackground
            width="40%"
            height="40%"
            backgroundColor="rgba(73, 189, 207, 0.3)"
            backgroundPage="transparent"
            url={background_checkered}
            zIndex={0}
            right={-24}
            bottom={-24}
          />
        </Box>
      </Container>
    </Content>
  );
}
