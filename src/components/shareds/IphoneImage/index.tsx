import styled from "styled-components";

const IphoneImageSC = styled.img``;

export default function IphoneImage({ src, alt, style, styleBoxImage }: IIphoneImage) {
  return (
    <div style={{ ...styleBoxImage }}>
      <IphoneImageSC src={src} alt={alt} style={{ ...style }} />
    </div>
  );
}

interface IIphoneImage {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  styleBoxImage?: React.CSSProperties;
}
