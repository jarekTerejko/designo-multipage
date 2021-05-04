import { Route, Switch, useLocation } from "react-router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import OurCompany from "./pages/OurCompany";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home containerVariants={containerVariants} />
          </Route>
          <Route path="/web-design" exact>
            <WebDesign containerVariants={containerVariants} />
          </Route>
          <Route path="/app-design" exact>
            <AppDesign containerVariants={containerVariants} />
          </Route>
          <Route path="/graphic-design" exact>
            <GraphicDesign />
          </Route>
          <Route path="/our-company" exact>
            <OurCompany containerVariants={containerVariants} />
          </Route>
          <Route path="/locations" exact>
            <Locations containerVariants={containerVariants} />
          </Route>
          <Route path="/contact" exact>
            <Contact containerVariants={containerVariants} />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
