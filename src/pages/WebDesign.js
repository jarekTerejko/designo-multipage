import CardsDesign from "../components/CardsDesign/CardsDesign";
import HeaderDesign from "../components/HeaderDesign/HeaderDesign";
import { webDesignsData } from "../cardsData";
import { webDesignLinksData } from "../linksDesignsData";
import DesignsLinks from "../components/DesignsLinks/DesignsLinks";

const WebDesign = () => {
  return (
    <>
      <HeaderDesign
        heading="Web Design"
        descriptionText="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <CardsDesign designsData={webDesignsData} />
      <DesignsLinks designsLinksPage linksData={webDesignLinksData} />
    </>
  );
};

export default WebDesign;
