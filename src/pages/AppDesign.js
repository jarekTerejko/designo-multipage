import CardsDesign from "../components/CardsDesign/CardsDesign";
import HeaderDesign from "../components/HeaderDesign/HeaderDesign";
import { appDesignData } from "../cardsData";
import { appDesignLinksData } from "../linksDesignsData";
import DesignsLinks from "../components/DesignsLinks/DesignsLinks";

const AppDesign = () => {
  return (
    <>
      <HeaderDesign
        heading="App Design"
        descriptionText=" Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <CardsDesign designsData={appDesignData} />
      <DesignsLinks linksData={appDesignLinksData} designsLinksPage />
    </>
  );
};

export default AppDesign;
