import headerImage from "@/assets/banner.png";
import { colors } from "@/styles/colors";
import styled from "styled-components";

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${headerImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(50%);
  }
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 48px;
  left: 48px;
  color: ${colors.white};
  z-index: 1;
  max-width: 50%;
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    max-width: 70%;
    bottom: 36px;
    gap: 16px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    bottom: 24px;
    left: 0;
    gap: 12px;
  }
`;

const Title = styled.p`
  font-size: 36px;
  line-height: 42px;

  @media (max-width: 1024px) {
    font-size: 30px;
    line-height: 36px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  line-height: 28px;

  @media (max-width: 1024px) {
    font-size: 22px;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export default function Banner() {
  return (
    <BannerContainer>
      <TextContainer>
        <Title>
          Guia Obstétrico: app auxilia na redução da mortalidade gestacional
        </Title>
        <Subtitle>
          A iniciativa faz parte de um esforço global para reduzir a mortalidade
          materna e garantir partos mais seguros, empoderando mulheres e
          ampliando o acesso a informações e cuidados de saúde adequados.
        </Subtitle>
      </TextContainer>
    </BannerContainer>
  );
}
