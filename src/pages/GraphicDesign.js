import CardsDesign from "../components/CardsDesign/CardsDesign";
import HeaderDesign from "../components/HeaderDesign/HeaderDesign";
import { graphicDesignData } from "../cardsData";
import { graphicDesignLinksData } from "../linksDesignsData";
import DesignsLinks from "../components/DesignsLinks/DesignsLinks";

const GraphicDesign = () => {
  return (
    <>
      <HeaderDesign
        heading="Graphic Design"
        descriptionText=" We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <CardsDesign designsData={graphicDesignData} />
      <DesignsLinks linksData={graphicDesignLinksData} designsLinksPage />
    </>
  );
};

export default GraphicDesign;
