import BuildingProcess from "../components/BuldingProcess/BuildingProcess";
import DesignsLinks from "../components/DesignsLinks/DesignsLinks";
import Hero from "../components/Hero/Hero";
import { homepageLinksData } from "../linksDesignsData";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Home = ({ containerVariants }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ScrollToTop />
      <Hero />
      <DesignsLinks designsLinksPage={false} linksData={homepageLinksData} />
      <BuildingProcess />
    </motion.div>
  );
};

export default Home;
