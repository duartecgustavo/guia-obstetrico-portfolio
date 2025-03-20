import { useEffect, useState } from "react";
import IconLogoGuiaObstetrico from "@/assets/logo-branco.png";
import styled from "styled-components";
import { colors } from "@/styles/colors";

interface NavbarProps {
  isScrolled: boolean;
}

const NavbarSC = styled.div<NavbarProps>`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 3px 10px rgba(0, 0, 0, 0.4)" : "none"};
  background: ${({ isScrolled }) =>
    isScrolled ? colors.primary : "transparent"};
  position: fixed;
  transition: background 0.5s ease;
`;

const ContainerLogoSC = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const IconLogoSC = styled.img`
  position: relative;
`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function upToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <NavbarSC isScrolled={isScrolled}>
      <ContainerLogoSC onClick={upToTop}>
        <IconLogoSC
          src={IconLogoGuiaObstetrico}
          alt=""
          style={{ width: 36, height: "auto" }}
        />
        <h3>Guia Obstétrico</h3>
      </ContainerLogoSC>
    </NavbarSC>
  );
}
