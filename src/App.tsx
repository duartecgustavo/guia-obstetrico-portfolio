import {
  AppDemonstration,
  AppDemonstrationDetails,
  Intro,
  Solution,
  TheBrazilChallenge,
  TheWorldChallenge,
} from "@/components/pages";
import {
  Banner,
  Footer,
  LinkToApp,
  Navbar,
  QRcodeToApp,
} from "@/components/sections";
import { colors } from "@/styles/colors";

function App() {
  return (
    <div style={{background: colors.white}}>
      <Navbar />
      <Banner />
      <Intro />
      <TheWorldChallenge />
      <TheBrazilChallenge />
      <Solution />
      <AppDemonstration />
      <AppDemonstrationDetails />
      <LinkToApp /> 
      <QRcodeToApp /> 
      <Footer />
    </div>
  );
}

export default App;
