import { Content } from "@/components/sections";
import { Box, Container, Text, TextMark, Title } from "@/components/shareds";
import { colors } from "@/styles/colors";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DivStyled = styled.div<{ transform: string }>`
  background: rgba(153, 207, 219, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${(props) => props.transform};

  @media (max-width: 1024px) {
    transform: ${(props) => props.transform};
  }

  @media (max-width: 768px) {
    transform: ${(props) => props.transform};
  }
`;

export default function TheWorldChallenge() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Content background={colors.white} >
      <Container>
        <Box style={{ paddingBlock: "48px" }}>
          <Title
            fontWeight="bold"
            fontFamily="Bebas Neue"
            color={colors.grayFontBody}
            style={{ marginBottom: "1000px" }}
          >
            Pensando nisso:
          </Title>
          <Text fontFamily="Aref Ruqaa Ink">
            Baseado em todas as fontes acima, é{" "}
            <TextMark color="Blue">
              {" "}
              evidente o enorme impacto que a mortalidade materna exerce sobre a
              sociedade como um todo
            </TextMark>
            . Este é um tema multidisciplinar que afeta não apenas as mulheres,
            mas todas as pessoas ao seu redor.
          </Text>
          <Text>
            Não à toa,{" "}
            <TextMark color="Blue">iniciativas globais como a da MSD</TextMark>,
            que atuam em várias frentes, são essenciais,{" "}
            <TextMark color="Blue">
              especialmente em regiões vulneráveis
            </TextMark>
            , tanto econômica quanto socialmente, onde o simples ato de nascer
            já representa um desafio.
          </Text>
          <Text>
            Diante da diversidade de realidades e desigualdades, no Brasil não
            poderia ser diferente. E para enfrentar um desafio de abrangência
            nacional, a <b>MSD Brasil</b>, por meio de sua iniciativa "MSD para
            Mães", uniu forças com o <b>Hospital Israelita Albert Einstein</b> —
            um dos hospitais mais renomados do país em conjunto com a{" "}
            <b>ACT Digital</b>— uma das maiores consultorias de tecnologia do
            Brasil.
          </Text>
          <Text>
            Juntos, há quase 3 anos começaram o desenvolvimento do{" "}
            <TextMark color="Blue">aplicativo Guia Obstétrico</TextMark>. Esta
            iniciativa faz parte de um esforço global para{" "}
            <TextMark color="Blue">
              reduzir a mortalidade materna e garantir partos mais seguros
            </TextMark>
            , ampliando o acesso a informações e cuidados de saúde adequados e
            trazer ferramentas importantes que auxiliem e facilitem o trabalho
            dos profissionais de saúde.
          </Text>
          <DivStyled
            transform={
              windowSize <= 540
                ? "rotate(0.5deg)"
                : windowSize <= 768
                ? "rotate(1.0deg)"
                : windowSize <= 1024
                ? "rotate(1.4deg)"
                : "rotate(1.7deg)"
            }
          />
          <DivStyled
            transform={
              windowSize <= 540
                ? "rotate(-0.5deg)"
                : windowSize <= 768
                ? "rotate(-1.0deg)"
                : windowSize <= 1024
                ? "rotate(-1.4deg)"
                : "rotate(-1.7deg)"
            }
          />
        </Box>
      </Container>
    </Content>
  );
}
