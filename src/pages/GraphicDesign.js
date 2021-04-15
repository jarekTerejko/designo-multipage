import CardsDesign from "../components/CardsDesign/CardsDesign";
import HeaderDesign from "../components/HeaderDesign/HeaderDesign";
import { graphicDesignData } from "../cardsData";

const GraphicDesign = () => {
  return (
    <>
      <HeaderDesign
        heading="Graphic Design"
        descriptionText=" We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <CardsDesign designsData={graphicDesignData} />
    </>
  );
};

export default GraphicDesign;
