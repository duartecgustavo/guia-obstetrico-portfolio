import BaixarApple from "@/assets/baixar-apple.png";
import BaixarPlayStore from "@/assets/baixar-play-store.png";
import iPhone_15_pro from "@/assets/iPhone-15-pro.png";
import QRCode from "@/assets/QRCode.png";
import { IphoneImage, Text, Title } from "@/components/shareds";
import { colors } from "@/styles/colors";
import styled from "styled-components";

export const ContainerSC = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;

  position: relative;
  justify-content: center;
  padding-inline: 192px;

  @media (max-width: 1024px) {
    padding-inline: 96px;
    padding-block: 24px;
  }

  @media (max-width: 768px) {
    padding-inline: 0px !important;
    padding-block: 0px !important;
    flex-wrap: initial;
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxSC = styled.div<IBoxSCProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "60%"};
  background: ${(props) => props.backgroundColor || "white"};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${(props) => props.padding || "8%"};

  @media (max-width: 768px) {
    width: 100%;
    padding: "none";
  }
`;

export const QRcodeToAppSC = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconQRCodeSC = styled.img`
  width: 200px;
`;

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

export const BoxLinksSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 16px;
  justify-content: space-between;
  gap: 24px;
`;

const ImageBaixarPlayStore = styled.img`
  height: 80px;
`;

const ImageBaixarPhone = styled.img`
  height: 80px;
`;
export default function GuideToApp() {
  return (
    <ContainerSC>
      <BoxSC
        backgroundColor={colors.lightBlue}
        width="30%"
        height="auto"
        padding="none"
      >
        <IphoneImage
          src={iPhone_15_pro}
          alt=""
          style={{ width: "60%", height: "100%" }}
          styleBoxImage={{
            width: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </BoxSC>
      <BoxSC backgroundColor={colors.lightGreen20} width="70%" height="auto">
        <div
          style={{
            width: "100%",
            height: "auto",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <Title
            alignText="center"
            color={colors.white}
            fontWeight="bold"
            fontFamily="Bebas Neue"
            fontSize="36px"
          >
            Baixe o Guia obstétrico agora
          </Title>
          <Text
            alignText="center"
            color={colors.white}
            fontSize="24px"
            fontFamily="Inter"
          >
            Clique abaixo para baixar nosso app na loja do seu dispositivo ou
            <b> aponte sua camera para o QR Code</b>
          </Text>
        </div>
      </BoxSC>
      <BoxSC backgroundColor={colors.lightGreen20} width="30%" height="auto">
        <QRcodeToAppSC>
          <IconQRCodeSC src={QRCode} alt="" />
        </QRcodeToAppSC>
      </BoxSC>
      <BoxSC backgroundColor={colors.lightBlue} width="70%" height="auto">
        <BoxLinksSC>
          <Title
            alignText="center"
            fontWeight="bold"
            color={colors.grayScale55}
            fontFamily="Bebas Neue"
            fontSize="36px"
          >
            Não perca mais tempo!
          </Title>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              height: "auto",
              flexDirection: "column",
            }}
          >
            <ImageBaixarPlayStore src={BaixarPlayStore} alt="" />
            <ImageBaixarPhone src={BaixarApple} alt="" />
          </div>
        </BoxLinksSC>
      </BoxSC>
    </ContainerSC>
  );
}

interface IBoxSCProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  padding?: string;
}
