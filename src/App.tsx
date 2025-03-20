import {
  AppDemonstration,
  AppDemonstrationDetails,
  DeveloperStatement,
  GuideToApp,
  Intro,
  Solution,
  TheBrazilChallenge,
  TheWorldChallenge,
} from "@/components/pages";
import { Banner, Footer, Navbar } from "@/components/sections";
import { ButtonUp } from "@/components/shareds";
import { colors } from "@/styles/colors";
import styled from "styled-components";

const AppContainerSc = styled.div`
  background: ${colors.white};
  position: "relative";
  display: "flex";
  flexdirection: "column";
`;

function App() {
  return (
    <AppContainerSc>
      <Navbar />
      <Banner />
      <Intro />
      <TheWorldChallenge />
      <TheBrazilChallenge />
      <Solution />
      <AppDemonstration />
      <AppDemonstrationDetails />
      <DeveloperStatement />
      <GuideToApp />
      <Footer />
      <ButtonUp />
    </AppContainerSc>
  );
}

export default App;
