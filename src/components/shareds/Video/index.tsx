import { colors } from "@/styles/colors";
import { useRef, useState } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: ${colors.black};
`;

const VideoWrapper = styled.div<{ isActive: boolean }>`
  position: relative;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: calc(70vh - 90px);
  }

  @media (max-width: 768px) {
    height: calc(40vh - 90px);
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${(props) => (props.isActive ? "101" : "4")};
  }
`;

const Overlay = styled.div<{ isActive: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  pointer-events: ${(props) => (props.isActive ? "auto" : "none")};
  z-index: 100;
  transition: opacity 0.8s ease;
`;

export default function Video({ videoId }: { videoId: string }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const onPlay = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    document.body.style.overflow = "hidden";
    setIsVideoPlaying(true);
  };

  const onPause = () => {
    setIsVideoPlaying(false);
    document.body.style.overflow = "auto";
  };

  const onEnd = () => {
    setIsVideoPlaying(false);
    document.body.style.overflow = "auto";
  };

  const handleClickOutside = () => {
    onPause();
  };

  return (
    <VideoContainer>
      <Overlay
        ref={overlayRef}
        isActive={isVideoPlaying}
        onClick={handleClickOutside}
      />
      <VideoWrapper ref={videoRef} isActive={isVideoPlaying}>
        <YouTube
          videoId={videoId}
          opts={{
            playerVars: {
              autoplay: 1,
              rel: 0,
              controls: 1,
            },
          }}
          onPlay={onPlay}
          onPause={onPause}
          onEnd={onEnd}
        />
      </VideoWrapper>
    </VideoContainer>
  );
}
