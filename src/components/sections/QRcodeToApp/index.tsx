import { colors } from "@/styles/colors";
import QRCode from "@/assets/QRCode.png";
import styled from "styled-components";

export const QRcodeToAppSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 240px;
  background: ${colors.yellow};
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

const IconQRCodeSC = styled.img`
  width: 200px;
`;

export default function QRcodeToApp() {
  return (
    <QRcodeToAppSC>
      <IconQRCodeSC src={QRCode} alt="" />
    </QRcodeToAppSC>
  );
}
