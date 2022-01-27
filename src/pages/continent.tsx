import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentInformation } from "../components/ContinentInformation";
import { Header } from "../components/Header";

export default function Continent() {
  return(
    <>
      <Header />
      <ContinentBanner />
      <ContinentInformation />
    </>
  );
}