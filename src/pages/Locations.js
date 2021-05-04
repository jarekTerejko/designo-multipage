import Offices from "../components/Offices/Offices";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Locations = ({ containerVariants }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ScrollToTop />
      <Offices />
    </motion.div>
  );
};

export default Locations;
