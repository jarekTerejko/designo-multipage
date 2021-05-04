import CardsDesign from "../components/CardsDesign/CardsDesign";
import HeaderDesign from "../components/HeaderDesign/HeaderDesign";
import { appDesignData } from "../cardsData";
import { appDesignLinksData } from "../linksDesignsData";
import DesignsLinks from "../components/DesignsLinks/DesignsLinks";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const AppDesign = ({ containerVariants }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ScrollToTop />
      <HeaderDesign
        heading="App Design"
        descriptionText=" Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <CardsDesign designsData={appDesignData} />
      <DesignsLinks linksData={appDesignLinksData} designsLinksPage />
    </motion.div>
  );
};

export default AppDesign;
