export default function ChallengeJournalBackground({
  width,
  height,
  right,
  left,
  top,
  bottom,
  backgroundColor,
  url,
  zIndex,
}: IChallengeJournalBackground) {
  return (
    <>
      {" "}
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f9f6f6",
          position: "absolute",
          zIndex: 1,
          left: 0,
          top: 0,
        }}
      />
      <div
        style={{
          width: width,
          height: height,
          position: "absolute",
          right: right,
          left: left,
          top: top,
          bottom: bottom,
          zIndex: zIndex,
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          position: "absolute",
          right: right,
          left: left,
          top: top,
          bottom: bottom,
          zIndex: zIndex,
        }}
      />
    </>
  );
}

interface IChallengeJournalBackground {
  width?: string;
  height?: string;
  right?: number;
  left?: number;
  top?: number;
  bottom?: number;
  backgroundColor?: string;
  url?: string;
  zIndex?: number;
}
