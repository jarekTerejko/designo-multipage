import CardsDesign from "../components/CardsDesign/CardsDesign";
import HeaderDesign from "../components/HeaderDesign/HeaderDesign";
import { webDesignsData } from "../cardsData";
import { webDesignLinksData } from "../linksDesignsData";
import DesignsLinks from "../components/DesignsLinks/DesignsLinks";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const WebDesign = ({ containerVariants }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ScrollToTop />
      <HeaderDesign
        heading="Web Design"
        descriptionText="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <CardsDesign designsData={webDesignsData} />
      <DesignsLinks designsLinksPage linksData={webDesignLinksData} />
    </motion.div>
  );
};

export default WebDesign;
