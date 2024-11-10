import styled from "styled-components";
import Phone from "@/assets/iphone.png";
import BaixarPlayStore from "@/assets/baixar-play-store.png";
import BaixarApple from "@/assets/baixar-apple.png";
import { colors } from "@/styles/colors";
import { Text, Title } from "@/components/shareds";

export const LinkToAppSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${colors.green};
  padding-inline: 192px;
  padding-block: 48px;
  justify-content: center;
  gap: 48px;

  @media (max-width: 768px) {
    padding: 36px;
    height: 180px;
    gap: 36px;
  }

  @media (max-width: 768px) {
    padding: 24px;
    height: 120px;
    gap: 24px;
  }
`;

export const BoxSC = styled.div`
  display: flex;
  width: 100%;
  background: ${colors.green};
  position: relative;
  border-radius: 16px;
`;

export const BoxLinksSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 48px;
  border-radius: 16px;
  justify-content: space-between;
`;

export const BoxPhoneSC = styled.div`
  position: relative;
  width: 40%;
  border-radius: 16px;
  height: 240px;
`;

const ImagePhone = styled.img`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
`;

const ImageBaixarPlayStore = styled.img`
  height: 80px;
`;

const ImageBaixarPhone = styled.img`
  height: 80px;
`;

export default function LinkToApp() {
  return (
    <LinkToAppSC>
      <BoxSC>
        <BoxLinksSC>
          <Title alignText="center">
            Em breve novos conteúdos e ferramentas
          </Title>
          <Text alignText="center">Baixe o aplicativo na sua loja</Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-end",
              width: "100%",
              height: "auto",
            }}
          >
            <ImageBaixarPlayStore src={BaixarPlayStore} alt="" />
            <ImageBaixarPhone src={BaixarApple} alt="" />
          </div>
        </BoxLinksSC>
        <BoxPhoneSC>
          <ImagePhone src={Phone} alt="" />
        </BoxPhoneSC>
      </BoxSC>
    </LinkToAppSC>
  );
}
