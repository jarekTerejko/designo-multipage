import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import OurCompany from "./pages/OurCompany";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/web-design" exact>
          <WebDesign />
        </Route>
        <Route path="/app-design" exact>
          <AppDesign />
        </Route>
        <Route path="/graphic-design" exact>
          <GraphicDesign />
        </Route>
        <Route path="/our-company" exact>
          <OurCompany />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
