import CardsDesign from "../components/CardsDesign/CardsDesign";
import HeaderDesign from "../components/HeaderDesign/HeaderDesign";
import { graphicDesignData } from "../cardsData";
import { graphicDesignLinksData } from "../linksDesignsData";
import DesignsLinks from "../components/DesignsLinks/DesignsLinks";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const GraphicDesign = ({ containerVariants }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ScrollToTop />
      <HeaderDesign
        heading="Graphic Design"
        descriptionText=" We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <CardsDesign designsData={graphicDesignData} />
      <DesignsLinks linksData={graphicDesignLinksData} designsLinksPage />
    </motion.div>
  );
};

export default GraphicDesign;
