import BuildingProcess from "../components/BuldingProcess/BuildingProcess";
import DesignsLinks from "../components/DesignsLinks/DesignsLinks";
import Hero from "../components/Hero/Hero";
import { homepageLinksData } from "../linksDesignsData";

const Home = () => {
  return (
    <>
      <Hero />
      <DesignsLinks designsLinksPage={false} linksData={homepageLinksData} />
      <BuildingProcess />
    </>
  );
};

export default Home;
