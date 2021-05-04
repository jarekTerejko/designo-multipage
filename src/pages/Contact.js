import Cities from "../components/Cities/Cities";
import HeroContact from "../components/HeroContact/HeroContact";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Contact = ({ containerVariants }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ScrollToTop />
      <HeroContact />
      <Cities />
    </motion.div>
  );
};

export default Contact;
