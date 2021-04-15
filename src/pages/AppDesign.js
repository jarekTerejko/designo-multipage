import CardsDesign from "../components/CardsDesign/CardsDesign";
import HeaderDesign from "../components/HeaderDesign/HeaderDesign";
import { appDesignData } from "../cardsData";

const AppDesign = () => {
  return (
    <>
      <HeaderDesign
        heading="App Design"
        descriptionText=" Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <CardsDesign designsData={appDesignData} />
    </>
  );
};

export default AppDesign;
