import { ITextMarkProps } from "@/interfaces/TextProps";
import { colors } from "@/styles/colors";
import { useEffect, useRef, useState } from "react";
import { TextMarkSC } from "./style"; // Ajuste o caminho conforme necessário

const TextMark = ({
  children,
  color,
  fontFamily,
  display = "initial",
}: ITextMarkProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const markRef = useRef<HTMLSpanElement>(null);

  // Função do IntersectionObserver para verificar se o componente está visível
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true); // Ativa a animação de preenchimento
      }
    });

    if (markRef.current) {
      observer.observe(markRef.current);
    }

    return () => {
      if (markRef.current) {
        observer.unobserve(markRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  let markColor: string = "#ffffff40";

  const colorMap: Record<string, string> = {
    White: "#ffffff40",
    Yellow: colors.yellow,
    Blue: "rgba(23, 116, 222, 0.2)",
    Green: "rgba(153, 207, 219, 0.66)",
  };

  if (color && colorMap[color]) {
    markColor = colorMap[color];
  } else if (color) {
    markColor = color;
  } else {
    markColor = colorMap["Green"];
  }

  return (
    <TextMarkSC
      ref={markRef}
      color={markColor}
      fontFamily={fontFamily}
      display={display}
      isVisible={isVisible}
    >
      {children}
    </TextMarkSC>
  );
};

export default TextMark;
