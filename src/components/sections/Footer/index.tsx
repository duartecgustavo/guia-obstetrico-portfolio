import IconLogoAct from "@/assets/logo-act-branco.png";
import IconLogoEinstein from "@/assets/logo-einstein-branco.png";
import IconLogoMsd from "@/assets/logo-msd-branco.png";
import { colors } from "@/styles/colors";
import styled from "styled-components";

export const FooterSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 240px;
  background: ${colors.black};
  padding: 48px;
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

const BoxIconsSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    gap: 36px;
  }
  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const RoundedPointSC = styled.div`
  width: 8px;
  height: 8px;
  background: ${colors.white};
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
  }
  @media (max-width: 768px) {
    width: 4px;
    height: 4px;
  }
`;

const TextSC = styled.p`
  font-size: 14px;
  color: ${colors.white};
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const IconLogoEinsteinSC = styled.img`
  width: auto;
  height: 50px;

  @media (max-width: 768px) {
    height: 36px;
  }
  @media (max-width: 768px) {
    height: 24px;
  }
`;

const IconLogoMsdSC = styled.img`
  width: auto;
  height: 50px;

  @media (max-width: 768px) {
    height: 36px;
  }
  @media (max-width: 768px) {
    height: 24px;
  }
`;

const IconLogoActSC = styled.img`
  width: auto;
  height: 36px;

  @media (max-width: 768px) {
    height: 24px;
  }
  @media (max-width: 768px) {
    height: 18px;
  }
`;

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <>
      <FooterSC>
        <BoxIconsSC>
          <IconLogoEinsteinSC src={IconLogoEinstein} alt="" />
          <RoundedPointSC />
          <IconLogoMsdSC src={IconLogoMsd} alt="" />
          <RoundedPointSC />
          <IconLogoActSC src={IconLogoAct} alt="" />
        </BoxIconsSC>
        <TextSC>
          Copyright © {anoAtual} Guia Obstétrico - Todos os direitos reservados.
        </TextSC>
      </FooterSC>
    </>
  );
}
